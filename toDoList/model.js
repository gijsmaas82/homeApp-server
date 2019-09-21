const Sequelize = require('sequelize')
const db = require('../db')
const User = require('../User/model')

const ToDo = db.define('toDo', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  done: {
    type: Sequelize.BOOLEAN, defaultValue: false 
  }
})

ToDo.belongsTo(User)
User.hasMany(ToDo)




module.exports = ToDo