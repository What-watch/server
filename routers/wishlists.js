const express = require('express')
const router = express.Router()
const WishlistController = require('../controllers/wishlistController')

router.get('/', WishlistController.findAll)
router.delete('/:movieId', WishlistController.delete)

module.exports = router