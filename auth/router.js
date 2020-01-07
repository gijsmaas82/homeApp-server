const { Router } = require('express')
const { toJWT } = require('./jwt')
const router = new Router()
const bcrypt = require('bcryptjs')            
const User = require('../User/model')


router.post(
  '/login', 
  (req, res) => {
    const name = req.body.name
    const password = req.body.password

    if(!name || !password) {
      res.status(400).send({
        message: 'Please enter a valid email and password'
      })
    }else {
      
      User
      .findOne({ where: { 
        name: req.body.name 
        } 
      })
      .then(entity => {
        if (!entity) { 
          res.status(400).send({ 
            message: 'User with that name does not exist' 
      }) 
    }
    if (bcrypt.compareSync(req.body.password, entity.password)) {
      res.send({ 
        jwt: toJWT({ userId: entity.id }),
        userName: entity.name,
        avatar: entity.avatar,
        description: entity.description

      })
    }else {
        res.status(400).send({ 
          message: 'Password was incorrect' 
        })
      }
    })
    .catch(err => {
      console.error(err)
      res.status(500).send({ 
        message: 'Something went wrong' 
      })
    })
  }
})

module.exports = router