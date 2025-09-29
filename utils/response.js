const response = (res, statusCode, data) => {
  res.status(statusCode).json({
    error: false,
    data,
  });
};

const errorResponse = (res, statusCode, message) => {
  res.status(statusCode).json({
    error: true,
    code: statusCode,
    message,
  });
};

module.exports = { response, errorResponse };