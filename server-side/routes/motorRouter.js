const express = require("express");
const router = express.Router();

const MotorController = require("../controllers/motorController");

router.get("/", MotorController.handleMotorcycles);
router.get("/:id", MotorController.handleDetailMotorcycle);

module.exports = router;