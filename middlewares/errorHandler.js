const { errorResponse } = require("../utils/response");

const errorHandler = (err, req, res, next) => {
  if (err.name == "CastError") {
    err.message = "Couldn't find document";
    err.statusCode = 500;
  }
  if (!err.statusCode) err.message = "Error while connecting to database";
  errorResponse(res, err.statusCode || 500, err.message);
};

module.exports = errorHandler;