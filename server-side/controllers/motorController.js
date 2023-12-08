const {
  Motorcycle,
  Merk
} = require("../models");

class MotorController {
  static async handleMotorcycles(req, res, next) {
    try {
      const motorcycles = await Motorcycle.findAll({
        include: Merk
      });
      res.status(200).json(motorcycles);
    } catch (err) {
      next(err);
    }
  }
  static async handleDetailMotorcycle(req, res, next) {
    try {
      const id = +req.params.id;
      const foundMotorcycle = await Motorcycle.findByPk(id, {
        include: Merk,
      });

      if (!foundMotorcycle) {
        throw {
          name: "NOT_FOUND"
        };
      }

      res.status(200).json(foundMotorcycle);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = MotorController;