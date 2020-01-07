const Sequelize = require('sequelize')
const { db } = require('../db')
const User = require('../User/model')

const Event = db.define('event', {
  title: {
    type: Sequelize.STRING, allowNull: false
  },
  date: {
    type: Sequelize.DATEONLY, allowNull: false
  },
  startTime: {
    type: Sequelize.STRING
  },
  endTime: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING, allowNull: false
  },
  picture: {
    type: Sequelize.TEXT('long')
  }
})

Event.belongsTo(User)
User.hasMany(Event)

module.exports = Event
