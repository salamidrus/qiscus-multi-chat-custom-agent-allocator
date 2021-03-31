const express = require("express");
const router = express.Router();
const serviceControllers = require("../controllers/service");

router.post("/allocate_assign", serviceControllers.AllocateAndAssignAgent);
router.post("/assign", serviceControllers.AssignAgent);
router.get("/allocate_agent", serviceControllers.AllocateAgent);
router.get("/allocate_customer", serviceControllers.AllocateCustomer);
router.post("/mark_as_resolved", serviceControllers.MarkAsResolvedChat);
router.post("/remove", serviceControllers.RemoveAgent);

module.exports = router;
