const TasksServices = require("../services/tasks");
const catchedAsync = require("../utils/catchedAsync");
const { response } = require("../utils/response");
const ClientError = require("../utils/clientErrors");
const validate = require("../utils/validate");

const createTasks = async (req, res) => {
  const params = req.body;

  let checkTitleData = validate.validateTasksTitle(params.title);
  let checkDoneData = validate.validateTasksDone(params.done);

  if (!checkTitleData)
    throw new ClientError(
      "Data input error (Title must be between 3-100 char)"
    );
  if (!checkDoneData)
    throw new ClientError("Data input error (Done must be 'TRUE' or 'FALSE')");

  const { id, title, done } = await TasksServices.createTask(params);

  response(res, 200, { id, title, done });
};

const readTasks = async (req, res) => {
  const page = req.params.page;
  const limit = req.params.limit;

  const tasks = await TasksServices.findTasks(page, limit);

  if (!tasks) throw new ClientError("Tasks not found", 404);

  response(res, 200, tasks);
};

const readTasksById = async (req, res) => {
  const id = req.params.id;

  const task = await TasksServices.findTaskById(id);

  if (!task) throw new ClientError("Task not found", 404);

  response(res, 200, task);
};

const updateTasks = async (req, res) => {
  const params = req.body;
  const id = req.params.id;

  let checkTitleData = validate.validateTasksTitle(params.title);
  let checkDoneData = validate.validateTasksDone(params.done);

  if (params.title && !checkTitleData)
    throw new ClientError(
      "Data input error (Title must be between 3-100 char)"
    );
  if (params.done && !checkDoneData)
    throw new ClientError("Data input error (Done must be 'TRUE' or 'FALSE')");

  await TasksServices.updateTask(id, params);

  const task = await TasksServices.findTaskById(id);

  if (!task) throw new ClientError("Task not found", 404);

  response(res, 200, task);
};

const deleteTasks = async (req, res) => {
  const id = req.params.id;

  const task = await TasksServices.findTaskById(id);

  if (!task) throw new ClientError("Task not found", 404);

  const deleteTask = await TasksServices.deleteTask(id);

  if (!deleteTask) throw new ClientError("Couldn't delete task");

  response(res, 200, task);
};

module.exports = {
  createTasks: catchedAsync(createTasks),
  readTasksById: catchedAsync(readTasksById),
  readTasks: catchedAsync(readTasks),
  updateTasks: catchedAsync(updateTasks),
  deleteTasks: catchedAsync(deleteTasks),
};
