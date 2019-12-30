const express = require('express')
const { Router } = express
const Photo= require('./model')
// const auth = require('../auth/middleware')


const router = new Router()

async function newPhoto (req, res) {
  const photo = {
    URL: req.body.URL,
    // userId: req.user.id
  }

  const newPhoto = await Photo.create(photo)

  return res.send(newPhoto)
}

// router.post('/drawing', auth, newDrawing)
router.post('/photo', newPhoto)

async function getPhotos (req, res) {
  const photos = await Photo.findAll()

  return res.send(photos)
}

// // router.get('/drawing', auth, getDrawings)
router.get('/photo', getPhotos)

module.exports = router