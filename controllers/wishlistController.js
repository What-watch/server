const { UserMovie } = require('../models')
const axios = require('axios')
const selectionId = require('../helpers/selectionIdMovie')

class WishlistController {

  static findAll (req, res, next) {
    UserMovie.findAll({
      where : {
        UserId : 1 // req.decoded.id 
      }
    })
      .then(movies => {
        let promises = []
        movies.forEach(movie => {
          const request = 
          axios({
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/get-details',
            headers: {
              "content-type":"application/json",
              "x-rapidapi-host": process.env.RAPIDAPI_HOST_IMDB,
              "x-rapidapi-key": process.env.RAPIDAPI_KEY_IMDB
            },
            params: {
              tconst: movie.MovieId
            }
          })
          promises.push(request)
        })
        return Promise.all(promises)
      })
      .then(response => {
        const movies = []
        for (const movie of response) {
          let idMovie = selectionId(movie.data.id)
          let dataMovie = {
            id: idMovie,
            image_url: movie.data.image.url,
            title: movie.data.title,
            year: movie.data.year
          }
          movies.push(dataMovie)
        }
        res.status(200).json(movies)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static delete (req, res, next) {
    let movieId = req.params.movieId
    let userId = 1 // req.decoded.id 
    UserMovie.destroy({
      where: {
        UserId: userId,
        MovieId: movieId
      }
    })
      .then(data => {
        res.status(200).json({
          message: 'Delete Movie from Wishlist successfully'
        })
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static create (req, res, next) {
    let payload = {
      UserId : 1,
      MovieId : req.body.MovieId
    }
    UserMovie.create(payload)
      .then(data => {
        res.status(201).json(data)
      })
      .catch(err => {
        res.status(500).json(data)
      })
  }
}

module.exports = WishlistController