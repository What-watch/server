const express = require('express')
const router = express.Router()
const TIXIDController = require('../controllers/tixIdApi')

router.get('/now', TIXIDController.moviesOnGoing )
router.get('/upcoming', TIXIDController.movieUpComing )


module.exports = router