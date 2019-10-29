const { Router } = require('express')
const Event = require('./model')

const router = new Router() 

router.post('/event', (req, res, next) => {
  Event.create(req.body)
    .then(event => res.json(event))
    .catch(err => next(err))
})

router.get('/event', (req, res, next) => {
  Event.findAll()
    .then(events => res.json(events))
    .catch(err => next(err))
})

module.exports = router