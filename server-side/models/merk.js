'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Merk.hasMany(models.Motorcycle)
      // define association here
    }
  }
  Merk.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Merk',
  });
  return Merk;
};