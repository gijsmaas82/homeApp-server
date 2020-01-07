const express = require('express')
const { Router } = express
const Photo= require('./model')
const auth = require('../auth/middleware')


const router = new Router()

async function newPhoto (req, res) {
  const photo = {
    picture: req.body.picture,
    name: req.body.name,
    album: req.body.album,
    userId: req.user.id
  }

  const newPhoto = await Photo.create(photo)

  return res.send(newPhoto)
}

router.post('/photo', auth, newPhoto)

async function getPhotos (req, res) {
  const photos = await Photo.findAll({ where: { userId: req.user.id }})

  return res.send(photos)
}

router.get('/photo', auth, getPhotos)

module.exports = router