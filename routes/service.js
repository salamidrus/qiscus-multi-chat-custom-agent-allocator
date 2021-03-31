const express = require("express");
const router = express.Router();
const serviceControllers = require("../controllers/service");

router.post("/allocate_assign", serviceControllers.AllocateAndAssign);
router.post("/assign", serviceControllers.Assign);

module.exports = router;
