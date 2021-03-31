const Customer = require("../models/customer");
const Agent = require("../models/agent");
const axios = require("axios");
const { BASE_URI, APP_CODE, SECRET_KEY } = process.env;

exports.AllocateAndAssignAgent = async (req, res, next) => {
  try {
    const { room_id, email, name } = req.body;

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

        // record the customer data
        await Customer.create({
          name,
          email,
          agent_id: agents[i].agentData.id,
          userData: req.body,
        });
        break;
      }

      // Run only when checker pass the last agent
      if (i == agents.length - 1) {
        // check if current user is already on the list then skip
        let checkUser = await Customer.findOne({
          "userData.email": email,
        });
        // put user into queue list by set the queue flag
        if (!checkUser)
          await Customer.create({
            name,
            email,
            userData: req.body,
            isQueue: true,
          });
      }
    }

    res.send("Webhook Triggered");
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.AssignAgent = async (req, res, next) => {
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
      { "agentData.id": Number(agent_id) },
      {
        $inc: { slot: 1 },
      }
    );

    // add agent id to customer data
    await Customer.findOneAndUpdate(
      { "userData.room_id": room_id },
      { $set: { agent_id: agent_id, isQueue: false } }
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

exports.AllocateAgent = async (req, res, next) => {
  try {
    // allocate agent sort by the least slot
    const agent = await Agent.findOne().sort({ slot: 1 }).select("-_id");

    if (agent.slot == 2) {
      return res.status(200).json({
        success: true,
        message: "All agents are not available",
        data: [],
      });
    }

    res.status(200).json({
      success: true,
      message: "Successfully get allocated agent",
      data: agent,
    });
  } catch (err) {
    next(err);
  }
};

exports.AllocateCustomer = async (req, res, next) => {
  try {
    let data = await Customer.findOne({ isQueue: true }).sort({ createdAt: 1 });

    if (!data)
      return res.status(200).json({
        success: true,
        message: "There is no customer in queue",
        data: null,
      });

    res.status(200).json({
      success: true,
      message: "Successfully get the customer",
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.MarkAsResolvedChat = async (req, res, next) => {
  try {
    const { room_id, notes, is_send_email, extras, agent_id } = req.body;
    // assign the agent
    let { data } = await axios({
      url: `${BASE_URI}/api/v1/agent/service/mark_as_resolved`,
      method: "POST",
      headers: {
        Authorization: req.headers.Authorization,
        "Qiscus-App-Id": APP_CODE,
      },
      data: {
        room_id,
        agent_id,
        notes,
        is_send_email,
        extras,
      },
    });

    // decrement the  agent's slot
    await Agent.findOneAndUpdate(
      { "agenData.id": agent_id },
      {
        $inc: { slot: -1 },
      }
    );

    res.status(200).json({
      success: true,
      message: "Successfully get allocated agent",
      data: data,
    });
  } catch (err) {
    next(err);
  }
};
