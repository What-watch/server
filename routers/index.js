const express = require('express')
const router = express.Router()
const users = require('./user')
const movies = require('./movies')
const wishlists = require('./wishlists')
const imdbRouter = require('./imdb')

router.use(users)
router.use('/movies', movies)
router.use('/wishlists', wishlists)
router.use('/users', users)
router.use('/imdb', imdbRouter)

module.exports = router