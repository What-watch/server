const express = require('express')
const router = express.Router()
const WishlistController = require('../controllers/wishlistController')

router.get('/', WishlistController.findAll)
router.post('/', WishlistController.create)
router.delete('/:movieId', WishlistController.delete)


module.exports = router