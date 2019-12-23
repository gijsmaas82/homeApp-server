const Sequelize = require('sequelize')
const db = require('../db')

const Personal = db.define('personal', {
  name: {
    type: Sequelize.STRING, allowNull: false
  },
  image: {
    type: Sequelize.STRING, defaultValue: 'https://i.ibb.co/qgDJsJ9/Apple.png',
  },
  info: {
    type: Sequelize.STRING, 
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