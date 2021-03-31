const QueueList = require("../models/queueList");
const Agent = require("../models/agent");
const axios = require("axios");
const { BASE_URI, APP_CODE, SECRET_KEY } = process.env;

exports.AllocateAndAssign = async (req, res, next) => {
  try {
    const { room_id, email } = req.body;

    // allocate agent sort by the least slot
    const agents = await Agent.find().sort({ slot: 1 });

    for (let i = 0; i < agents.length; i++) {
      // check agent's availability, MAX 2 customers served at a time
      if (agents[i].slot < 2) {
        // assign the agent
        await axios({
          url: `${BASE_URI}/api/v1/admin/service/assign_agent`,
          method: "POST",
          headers: {
            "Qiscus-App-Id": APP_CODE,
            "Qiscus-Secret-Key": SECRET_KEY,
          },
          data: {
            room_id: room_id,
            agent_id: agents[i].agentData.id,
          },
        });

        // increment the  agent's slot
        await Agent.findByIdAndUpdate(agents[i]._id, {
          $inc: { slot: 1 },
        });
        break;
      }

      // Run only when checker pass the last agent
      if (i == agents.length - 1) {
        // check if current user is already on the list then skip
        let checkUser = await QueueList.findOne({
          "userData.email": email,
        });
        // put user into queue list
        if (!checkUser) await QueueList.create({ userData: req.body });
      }
    }

    res.send("Webhook Triggered");
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.Assign = async (req, res, next) => {
  try {
    const { room_id, agent_id } = req.body;

    // assign the agent
    let { data } = await axios({
      url: `${BASE_URI}/api/v1/admin/service/assign_agent`,
      method: "POST",
      headers: {
        "Qiscus-App-Id": APP_CODE,
        "Qiscus-Secret-Key": SECRET_KEY,
      },
      data: {
        room_id: room_id,
        agent_id: agent_id,
      },
    });

    // increment the  agent's slot
    await Agent.findOneAndUpdate(
      { "agenData.id": agent_id },
      {
        $inc: { slot: 1 },
      }
    );

    res.status(200).json({
      success: true,
      message: "Successfully assign the agent",
      data: data.data,
    });
  } catch (err) {
    next(err);
  }
};
