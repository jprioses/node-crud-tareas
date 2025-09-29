const TasksTable = require('../models/Tasks')

const createTask = (data) => {
    return TasksTable.create({...data})
};

const findTaskById = (id) => {
  return TasksTable.findOne({attributes: ['id', 'title', 'done'], where: {id}});
}

const findTasks= (page, limit) => {

  const options = {}

  if (limit )options.limit = limit
  if (page && limit) options.offset = page*limit

  const offset = page*limit 
  return TasksTable.findAll({attributes: ['id', 'title', 'done'],...options});
};

const updateTask = (id, params) => {
  return TasksTable.update({...params},{where: {id}})
}

const deleteTask = (id) => {
  return TasksTable.destroy({where: {id}})
}

module.exports = {
  createTask,
  findTaskById,
  findTasks,
  updateTask,
  deleteTask
}