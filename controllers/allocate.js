const QueueList = require("../models/queueList");
const Agent = require("../models/agent");

exports.Allocate = async (req, res, next) => {
  try {
    const agents = await Agent.find().sort({ createdAt: 1 });

    for (let i = 0; i < agents.length; i++) {
      console.log(i);
      if (agents[i].slot < 2) {
        // allocate the user
        // console.log("Allocate the User");
        break;
      }

      if (i == agents.length - 1) {
        // put user into queue list
        // console.log("Put User into queue list");
      }
    }

    res.send(agents);
  } catch (err) {
    next(err);
  }
};
