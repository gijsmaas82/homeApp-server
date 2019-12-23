const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const toDoRouter = require('./toDoList/router')
const userRouter = require('./User/router')
const eventRouter = require('./Calendar/router')
const personalRouter = require('./personal/router')
const app = express()
const login = require('./auth/router')

const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

app.use(toDoRouter, userRouter, login, eventRouter, personalRouter)


const port = process.env.PORT || 4000

app.listen(port, () => console.log('PORT on:', port))