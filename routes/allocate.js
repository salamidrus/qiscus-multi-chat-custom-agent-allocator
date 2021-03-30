const express = require("express");
const router = express.Router();
const allocateControllers = require("../controllers/allocate");

router.post("/", allocateControllers.Allocate);

module.exports = router;
