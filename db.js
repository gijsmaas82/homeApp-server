const Sequelize = require('sequelize')

const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'

const db = new Sequelize(databaseUrl)

const databaseSync = () => 
  db.sync({ force: false })
  .then(console.log('db connected'))
  .catch(console.error)


module.exports = { db, databaseSync }