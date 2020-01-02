const Sequelize = require('sequelize')
const { db } = require('../db')

const Personal = db.define('personal', {
  name: {
    type: Sequelize.STRING, allowNull: false
  },
  image: {
    type: Sequelize.TEXT('long'), allowNull: false
  },
  info: {
    type: Sequelize.TEXT, allowNull: false 
  },
  listItemOne: {
    type: Sequelize.STRING, allowNull: false
  },
  listItemTwo: {
    type: Sequelize.STRING, allowNull: false
  },
  listItemThree: {
    type: Sequelize.STRING, allowNull: false
  },
})

module.exports = Personal