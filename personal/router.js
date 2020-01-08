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

router.delete('/personal/:id', (req, res, next) => {
  Personal.destroy({ where: { id: req.params.id }})
    .then(res.status(204)
    .send('Personal removed'))
    .catch(err => next(err))
})

module.exports = router