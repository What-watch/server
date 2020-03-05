const express= require('express')
const router = express.Router()
const users = require('./user')
const imdbRouter = require('./imdb')

router.use('/users', users)
router.use('/imdb', imdbRouter)

module.exports = router