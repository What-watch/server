const { User } = require('../models')

class UserController {
  static register (req, res, next) {
    res.send('Hallo')
  }

}

module.exports = UserController