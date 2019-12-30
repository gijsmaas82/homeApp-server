const express = require('express')
const { Router } = express
const Drawing = require('./model')
// const auth = require('../auth/middleware')


const router = new Router()

async function newDrawing (req, res) {
  const drawing = {
    URL: req.body.URL,
    // userId: req.user.id
  }

  const newDrawing = await Drawing.create(drawing)

  return res.send(newDrawing)
}

// router.post('/drawing', auth, newDrawing)
router.post('/drawing', newDrawing)

async function getDrawings (req, res) {
  const drawings = await Drawing.findAll()

  return res.send(drawings)
}

// // router.get('/drawing', auth, getDrawings)
router.get('/drawing', getDrawings)

module.exports = router