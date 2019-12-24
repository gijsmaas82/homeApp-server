const { Router } = require('express')
const Personal = require('./model')

const router = new Router()

router.post('/personal', (req, res, next) => {
  Personal.create(req.body)
    .then(personal => res.json(personal))
    .catch(err => next(err))
})

router.get('/personal', (req, res, next) => {
  Personal.findAll()
  .then(personal => res.json(personal))
  .catch(err => next(err))
})

module.exports = router