const Sequelize = require('sequelize')
const db = require('../db')
const User = require('../User/model')

const Event = db.define('event', {
  title: {
    type: Sequelize.STRING, allowNull: false
  },
  date: {
    type: Sequelize.DATEONLY
  },
  startTime: {
    type: Sequelize.STRING
  },
  endTime: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  picture: {
    type: Sequelize.STRING
  }
})

Event.belongsTo(User)
User.hasMany(Event)

module.exports = Event
