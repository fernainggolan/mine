const express = require("express");
const router = express.Router();
const RentController = require("../controllers/rentController");

router.post("/payment/:price/:trxcode", RentController.handleMidtrans);
router.patch("/:id", RentController.handleStatus);
router.post("/:id", RentController.handleCreateRent);

module.exports = router;