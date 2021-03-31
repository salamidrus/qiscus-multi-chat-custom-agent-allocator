const Customer = require("../models/customer");

exports.Search = async (req, res, next) => {
  try {
    let data = await Customer.findOne(req.query);

    res.status(200).json({
      success: true,
      message: "Successfully get the customer",
      data,
    });
  } catch (err) {
    next(err);
  }
};
