const { UserMovie } = require('../models')
const axios = require('axios')
const selectionId = require('../helpers/selectionIdMovie')

class WishlistController {

  static findAll (req, res, next) {
    UserMovie.findAll({
      where : {
        UserId : 1 // req.currentUserId
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
              "x-rapidapi-host":"imdb8.p.rapidapi.com",
              "x-rapidapi-key":"0565ce5be1mshc9853b4ee335566p106544jsn7103d2b17cf0"
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
    let userId = 1 // req.currentUserId
    UserMovie.destroy({
      where: {
        UserId: userId,
        MovieId: movieId //tt321434
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
}

module.exports = WishlistController