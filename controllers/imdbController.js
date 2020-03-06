const axios = require('axios')

class imdbController {
  static findByTitleImdb(req, res, next) {
      axios({
        "method":"GET",
        "url":"https://movie-database-imdb-alternative.p.rapidapi.com/",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host": process.env.API_HOST,
        "x-rapidapi-key": process.env.API_KEY
        },"params":{
        "page":"1",
        "r":"json",
        "s": req.query.search
        }
        })
        .then((response)=>{
          res.send(response.data.Search)
        })
        .catch((error)=>{
          console.log(error)
        })
  }

  static getDetails(req, res, next) {
    axios({
      "method": "GET",
      "url": "https://movie-database-imdb-alternative.p.rapidapi.com/",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": process.env.API_HOST,
        "x-rapidapi-key": process.env.API_KEY
      },
      "params": {
        "i": req.query.imdbId,
        "r": "json"
      }
    })
    .then((response) => {
      let data = {
        Title: response.data.Title,
        Year: response.data.Year,
        Rated: response.data.Rated,
        Released: response.data.Released,
        Director: response.data.Director,
        Ratings: response.data.Ratings,
        imdbRating: response.data.imdbRating,
        imdbID: response.data.imdbID,
        Production: response.data.Production,
        Poster: response.data.Poster,
        Country: response.data.Country,
        Plot: response.data.Plot
      }
      res.send(data)      
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

module.exports = imdbController