const mongoose = require("mongoose");
const { Schema } = mongoose;

const queueListSchema = new Schema(
  {
    userData: { type: Object },
  },
  { timestamps: true, versionKey: false }
);

const queueList = mongoose.model("QueueList", queueListSchema);

module.exports = queueList;
