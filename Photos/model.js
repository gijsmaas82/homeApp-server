const Sequelize = require('sequelize')
const { db } = require('../db')
const User = require('../User/model')

const Photo = db.define(
  'photo',
  {
    URL: 
    { type: Sequelize.STRING }
  }
)

User.hasMany(Photo)
Photo.belongsTo(User)

module.exports = Photo