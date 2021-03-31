const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    userData: { type: Object },
    isQueue: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false }
);

const customer = mongoose.model("Customer", customerSchema);

module.exports = customer;
