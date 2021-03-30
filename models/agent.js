const mongoose = require("mongoose");
const { Schema } = mongoose;

const agentSchema = new Schema(
  {
    agentData: { type: Object },
    slot: { type: Number, default: 0 },
  },
  { timestamps: true, versionKey: false }
);

const agent = mongoose.model("Agent", agentSchema);

module.exports = agent;
