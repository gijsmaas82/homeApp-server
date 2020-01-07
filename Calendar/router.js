const { Router } = require('express')
const Event = require('./model')
const auth = require('../auth/middleware')

const router = new Router() 

router.post('/event', auth, (req, res, next) => {
  const event = {
    title: req.body.title,
    date: req.body.date,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    description: req.body.description,
    picture: req.body.picture,
    userId: req.user.id
  }

  Event.create(event)
    .then(event => res.send({ "message": "Event created"} ))
    .catch(err => next(err))
})

router.get('/event/:year/:month/:day', auth, (req, res, next) => {
  const eventDate = new Date(
    parseInt(req.params.year),
    parseInt(req.params.month) - 1,
    parseInt(req.params.day),
    0, 0, 0, 0
  )
  Event.findAll({ where: { date: eventDate, userId: req.user.id } })
    .then(events => res.json(events))
    .catch(err => next(err))
})

router.delete('/event/:id', auth, (req, res, next) => {
  Event.destroy({ where: { id: req.params.id }})
    .then(res.status(204)
    .send('Event removed'))
    .catch(err => next(err))
})
  



module.exports = router
