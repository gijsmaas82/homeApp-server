const Sequelize = require('sequelize')
const { db } = require('../db')
const User = require('../User/model')

const Drawing = db.define(
  'drawing',
  {
    URL: 
    { type: Sequelize.TEXT('long')}
  }
)

User.hasMany(Drawing)
Drawing.belongsTo(User)

module.exports = Drawing