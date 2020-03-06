const { tokenVerify } = require('../helper/jwt')

module.exports = function (req, res, next) {

  try {
    let decoded = tokenVerify(req.headers.token)
    console.log(decoded)
    req.currentUserId = decoded.id
    next()
  } catch (err) {
    next(err)
  }
}