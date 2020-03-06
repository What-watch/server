if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const errorHandler = require('./middleware/errorHandler')
const routes = require('./routers')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))

app.use(routes)

app.use(errorHandler)

app.listen(port, () => {
  console.log('Listening on port', port)
})
