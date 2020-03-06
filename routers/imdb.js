const router = require('express').Router()
const ImdbController = require('../controllers/imdbController')

router.get('/movies', ImdbController.findByTitleImdb)
module.exports = router