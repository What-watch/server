const express= require('express')
const router = express.Router()
const users = require('./user')
const wishlists = require('./wishlists')

router.use(users)
router.use('/wishlists', wishlists)

module.exports = router