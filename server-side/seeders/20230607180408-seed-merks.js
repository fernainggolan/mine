'use strict';
const merks = require("../merks.json");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    merks.forEach((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();

      return el;
    });
    await queryInterface.bulkInsert("Merks", merks, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Merks", null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
