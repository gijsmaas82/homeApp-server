const { Router } = require('express')
const Project = require('./model')

const router = new Router()

router.post('/project', (req, res, next) => {
  Project.create(req.body)
    .then(project => res.json(project))
    .catch(err => next(err))
})

router.get('/project', (req, res, next) => {
  Project.findAll()
  .then(project => res.json(project))
  .catch(err => next(err))
})

module.exports = router