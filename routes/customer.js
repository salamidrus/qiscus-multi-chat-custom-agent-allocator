const express = require("express");
const router = express.Router();
const customerControllers = require("../controllers/customer");

router.get("/", customerControllers.Search);

module.exports = router;
