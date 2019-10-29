const Sequelize = require('sequelize')
const db = require('../db')
const ToDo = require('../toDoList/model')

const User = db.define(
  'user',
  {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
  }
)


module.exports = User