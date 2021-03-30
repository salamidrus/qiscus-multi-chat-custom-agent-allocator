const express = require("express");
const router = express.Router();
const agentControllers = require("../controllers/agent");

router.post("/seed", agentControllers.SeedAgents);

module.exports = router;
