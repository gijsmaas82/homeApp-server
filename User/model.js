const Sequelize = require('sequelize')
const { db } = require('../db')
const ToDo = require('../toDoList/model')

const User = db.define(
  'user',
  {
    name: {
      type: Sequelize.STRING, allowNull: false
    },
    email: {
      type: Sequelize.STRING, allowNull: false
    },
    password: {
      type: Sequelize.STRING, allowNull: false
    },
    avatar: {
      type: Sequelize.TEXT('long')
    },
    rank: {
      type: Sequelize.INTEGER, defaultValue: 0
    },
    description: {
      type: Sequelize.TEXT
    }
  }
)


module.exports = User