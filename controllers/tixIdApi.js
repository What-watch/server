const axios = require('axios')
// const tokenMovie = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtc2lzZG4iOiIiLCJ1c2VyX2lkIjoiIiwiYXV0aF9zaWduIjoiMDczN2QyOGMtOGZiNC00ZmZhLWE1Y2ItMmIwZjcwYjAzNmE0IiwicHVycG9zZSI6Im5vdGxvZ2luIiwiYXVkIjoiVGl4SUQgTWlkZGxld2FyZSIsImV4cCI6MTU5MjAzODMzMSwiaWF0IjoxNTgzMzk4MzMxLCJpc3MiOiJUaXhJRCBTZWN1cml0eSBBdXRob3JpdHkiLCJzdWIiOiJNb2JpbGUgYXV0aG9yaXphdGlvbiB0b2tlbiJ9.sR4J7CyiUDrcS_MzqHlNaF0rQ2X15S52mFf5ryNjuxI"

class TIXIDController{
    static moviesOnGoing(req, res, next){
        console.log('masuk list movies')
        axios({
            method: 'GET',
            url: 'https://api.tix.id/v1/movies/upcoming?city_id=973818511732248576&tz=7',
            headers: {
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtc2lzZG4iOiIiLCJ1c2VyX2lkIjoiIiwiYXV0aF9zaWduIjoiMDczN2QyOGMtOGZiNC00ZmZhLWE1Y2ItMmIwZjcwYjAzNmE0IiwicHVycG9zZSI6Im5vdGxvZ2luIiwiYXVkIjoiVGl4SUQgTWlkZGxld2FyZSIsImV4cCI6MTU5MjAzODMzMSwiaWF0IjoxNTgzMzk4MzMxLCJpc3MiOiJUaXhJRCBTZWN1cml0eSBBdXRob3JpdHkiLCJzdWIiOiJNb2JpbGUgYXV0aG9yaXphdGlvbiB0b2tlbiJ9.sR4J7CyiUDrcS_MzqHlNaF0rQ2X15S52mFf5ryNjuxI"
            },
            
        })
            .then(movies => {
                console.log(movies)
                res.status(200).json({
                    data: "ok"
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: "Internal Server Error"
                })
                console.log(err)
            })
    }

    static movieUpComing(req, res, next){
        axios({
            method: 'GET',
            url: 'https://api.tix.id/v1/movies/upcoming?city_id=973818511732248576',
            headers: {
                tokenMovie: tokenMovie
            }
        })
            .then(movies => {
                console.log(movies)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

module.exports = TIXIDController