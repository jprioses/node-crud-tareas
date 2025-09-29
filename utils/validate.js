const validateTasksTitle = (title) => {
  return title && title.length >= 3 && title.length <= 100;
};

const validateTasksDone = (done) => {
  return done && (done == "TRUE" || done == "FALSE");
};

module.exports = {
  validateTasksTitle,
  validateTasksDone,
};
