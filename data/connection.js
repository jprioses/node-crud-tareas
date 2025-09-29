const path = require('path');
const { Sequelize } = require('sequelize');

module.exports = new Sequelize({
  logging: false,
  dialect: 'sqlite',
  storage: path.join(__dirname, 'database.db')
});
