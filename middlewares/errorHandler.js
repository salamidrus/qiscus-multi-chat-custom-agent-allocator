module.exports = (err, req, res, next) => {
  if (err) {
    if (err.status) {
      res.status(err.status).json({
        success: false,
        message: err.message,
      });
    } else if (err.response.data) {
      res.status(400).json({
        success: false,
        message: err.response.data.errors,
      });
    } else {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  }
};
