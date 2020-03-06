const axios = require('axios')
// const tokenMovie = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtc2lzZG4iOiIiLCJ1c2VyX2lkIjoiIiwiYXV0aF9zaWduIjoiMDczN2QyOGMtOGZiNC00ZmZhLWE1Y2ItMmIwZjcwYjAzNmE0IiwicHVycG9zZSI6Im5vdGxvZ2luIiwiYXVkIjoiVGl4SUQgTWlkZGxld2FyZSIsImV4cCI6MTU5MjAzODMzMSwiaWF0IjoxNTgzMzk4MzMxLCJpc3MiOiJUaXhJRCBTZWN1cml0eSBBdXRob3JpdHkiLCJzdWIiOiJNb2JpbGUgYXV0aG9yaXphdGlvbiB0b2tlbiJ9.sR4J7CyiUDrcS_MzqHlNaF0rQ2X15S52mFf5ryNjuxI"

class TIXIDController{
    static moviesOnGoing(req, res, next){
        console.log('masuk list movies')
        axios({
            method: 'GET',
            url: 'https://api.tix.id/v1/movies/now_playing',
            headers: {
                // "content-type": "application/json",
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtc2lzZG4iOiIiLCJ1c2VyX2lkIjoiIiwiYXV0aF9zaWduIjoiMmNmNGUxNzktNzQwNS00YWJkLWFlNjAtNTFiMGE2NzhlMzIxIiwicHVycG9zZSI6Im5vdGxvZ2luIiwiYXVkIjoiVGl4SUQgTWlkZGxld2FyZSIsImV4cCI6MTU5MjA5NzYxMCwiaWF0IjoxNTgzNDU3NjEwLCJpc3MiOiJUaXhJRCBTZWN1cml0eSBBdXRob3JpdHkiLCJzdWIiOiJNb2JpbGUgYXV0aG9yaXphdGlvbiB0b2tlbiJ9.q4PiBBerifPNjhxlNO6hL2dgP_nkFzYG7OYxNzBQ8ro",
                // 'User-Agent': 'axios/0.19.2'
            },
            params: {
                city_id : "973818511732248576",
                tz : "7"
            }
        })
            .then(response => {
                let movies = response.data.results
                res.status(200).json(movies)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({
                    error: "Internal Server Error",
                    err
                })
            })
    }

    static movieUpComing(req, res, next){
        axios({
            method: 'GET',
            url: 'https://api.tix.id/v1/movies/upcoming',
            headers: {
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtc2lzZG4iOiIiLCJ1c2VyX2lkIjoiIiwiYXV0aF9zaWduIjoiMmNmNGUxNzktNzQwNS00YWJkLWFlNjAtNTFiMGE2NzhlMzIxIiwicHVycG9zZSI6Im5vdGxvZ2luIiwiYXVkIjoiVGl4SUQgTWlkZGxld2FyZSIsImV4cCI6MTU5MjA5NzYxMCwiaWF0IjoxNTgzNDU3NjEwLCJpc3MiOiJUaXhJRCBTZWN1cml0eSBBdXRob3JpdHkiLCJzdWIiOiJNb2JpbGUgYXV0aG9yaXphdGlvbiB0b2tlbiJ9.q4PiBBerifPNjhxlNO6hL2dgP_nkFzYG7OYxNzBQ8ro"
            },
            params: {
                city_id : "973818511732248576"
            }
        })
            .then(response => {
                console.log(response)
                let movies = response.data.results
                res.status(200).json(movies)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

module.exports = TIXIDController