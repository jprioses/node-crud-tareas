const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../data/connection');
TasksTable = sequelize.define(
  'Tasks',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title :{
      type: DataTypes.STRING,
      
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: 'FALSE',
    },
  }
);

module.exports = TasksTable