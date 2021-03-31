const express = require("express");
const router = express.Router();
const serviceControllers = require("../controllers/service");

router.post("/allocate_assign", serviceControllers.AllocateAndAssign);
router.post("/assign", serviceControllers.Assign);
router.get("/allocate", serviceControllers.Allocate);
router.post("/mark_as_resolved", serviceControllers.MarkAsResolved);

module.exports = router;
