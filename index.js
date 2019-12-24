const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const toDoRouter = require('./toDoList/router')
const userRouter = require('./User/router')
const eventRouter = require('./Calendar/router')
const personalRouter = require('./personal/router')
const projectRouter = require('./projects/router')
const app = express()
const login = require('./auth/router')
const { databaseSync } = require("./db")
const { checkSuperAdmin } = require("./auth/superAdmin")

const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

app.use(toDoRouter, userRouter, login, eventRouter, personalRouter, projectRouter)


const port = process.env.PORT || 4000

app.listen(port, () => console.log('PORT on:', port))

databaseSync().then(checkSuperAdmin)