const Agent = require("../models/agent");
const axios = require("axios");
const BASE_URI = process.env.BASE_URI;
const ADMIN_TOKEN = process.env.ADMIN_TOKEN;
const APP_CODE = process.env.APP_CODE;

exports.SeedAgents = async (req, res, next) => {
  try {
    const { data } = await axios({
      url: `${BASE_URI}/api/v2/admin/agents`,
      headers: {
        Authorization: ADMIN_TOKEN,
        "Qiscus-App-Id": APP_CODE,
      },
    });

    if (data.data.agents.length) {
      let {
        data: { agents },
      } = data;

      let mapAgentData = agents.map((el) => {
        return {
          agentData: el,
        };
      });

      const result = await Agent.insertMany(mapAgentData);

      return res.status(200).json({
        success: true,
        message: "Agents Successfully Saved to DB!",
        result,
      });
    }

    res.status(200).json({ success: true, message: "There is no agent!" });
  } catch (err) {
    next(err);
  }
};
