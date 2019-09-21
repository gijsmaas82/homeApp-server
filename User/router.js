const express = require('express')
const { Router } = express
const User = require('./model')
const bcrypt = require('bcryptjs')
// const auth = require('../auth/middleware')

const router = new Router()

async function onRegistry (req, res) {
  const user = {
    name: req.body.name,
    password: bcrypt.hashSync(req.body.password)
  }

  const registeredUser = await User.create(user)

  return res.send(registeredUser)
}

router.post('/user', onRegistry)

module.exports = router