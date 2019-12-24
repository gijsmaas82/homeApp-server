const Sequelize = require('sequelize')
const { db } = require('../db')

const Project = db.define('project', {
  name: {
    type: Sequelize.STRING, allowNull: false
  },
  image: {
    type: Sequelize.STRING, allowNull: false
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

module.exports = Project