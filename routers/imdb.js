const router = require('express').Router()
const ImdbController = require('../controllers/imdbController')

router.get('/movies', ImdbController.findByTitleImdb)
router.get('/details', ImdbController.getDetails)

module.exports = router