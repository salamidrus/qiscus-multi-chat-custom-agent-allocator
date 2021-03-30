const mongoose = require("mongoose");
const { Schema } = mongoose;

const agentSchema = new Schema(
  {
    agentData: { type: Object },
    slots: { type: Number },
  },
  { timestamps: true, versionKey: false }
);

const agent = mongoose.model("Agent", agentSchema);

module.exports = agent;
