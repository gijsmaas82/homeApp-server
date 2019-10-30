const { Router } = require('express')
const Event = require('./model')

const router = new Router() 

router.post('/event', (req, res, next) => {
  Event.create(req.body)
    .then(event => res.json(event))
    .catch(err => next(err))
})

router.get('/event/:year/:month/:day', (req, res, next) => {
  const eventDate = new Date(
    parseInt(req.params.year),
    parseInt(req.params.month) - 1,
    parseInt(req.params.day),
    0, 0, 0, 0
  )
  Event.findAll({ where: { date: eventDate } })
    .then(events => res.json(events))
    .catch(err => next(err))
})

router.delete('/event/:id', (req, res, next) => {
  Event.destroy({ where: { id: req.params.id }})
    .then(res.status(204)
    .send('Event removed'))
    .catch(err => next(err))
})
  



module.exports = router
