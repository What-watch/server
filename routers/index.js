const express= require('express')
const router = express.Router()
const users = require('./user')
const movies = require('./movies')

router.use(users)
router.use('/movies', movies)

module.exports = router