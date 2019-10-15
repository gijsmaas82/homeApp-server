const { Router } = require('express')
const ToDo = require('./model')
const auth = require('../auth/middleware')

const router = new Router()

router.get('/todolist', auth, (req, res, next) => {
  ToDo.findAll()
    .then(todolist => res.json(todolist))
    .catch(err => next(err))
})

router.post('/todolist', (req, res, next) => {
  ToDo.create(req.body)
    .then(todo => res.json(todo))
    .catch(next)
})

module.exports = router