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
  if (!req.headers.album) {
    const allPhotos = await Photo.findAndCountAll({ 
      limit: 10, 
      offset: (req.headers.page - 1)*10, 
      where: { userId: req.user.id }
    })
    
    return res.send(allPhotos)
  } else {
    console.log('page:', req.headers)
    const albumPhotos = await Photo.findAndCountAll({ 
      limit: 10,
      offset: req.headers.page * 10 -10, 
      where: {userId: req.user.id, album: req.headers.album }})
    return res.send(albumPhotos)
  }
}

router.get('/photo', auth, getPhotos)

async function getAlbums (req, res) {
  const photos = await Photo.findAll({ where: { userId: req.user.id }})
  const albums = photos.reduce((albumList, photo) => {
    if (photo.album !== null) {
      const uniqueAlbum = albumList.albums.find(album => album === photo.album)
      if (!uniqueAlbum) {
        albumList.albums.push(photo.album)
      }
      return albumList
    }
    return albumList
  }, { 
    albums: []
  })
  return res.send(albums.albums)
}

router.get('/photoalbums', auth, getAlbums)

module.exports = router