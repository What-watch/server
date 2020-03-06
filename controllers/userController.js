const { OAuth2Client } = require('google-auth-library');
const {
  User
} = require('../models')
const {
  comparePass
} = require('../helper/hashpassword')
const {
  tokenGenerate
} = require('../helper/jwt')



class UserController {
  static register(req, res, next) {
    let {
      fullname,
      email,
      password,
      no_hp
    } = req.body
    User.create({
      fullname,
      email,
      password,
      no_hp,
      createdAt: new Date(),
      updatedAt: new Date()
    })
      .then(result => {
        let payLoad = {
          id: result.id,
          fullname: result.fullname,
          email: result.email,
          no_hp: result.no_hp
        }
        res.status(200).json(payLoad)
      })
      .catch(err => {
        next({
          status: 400,
          msg: {
            err: err.errors[0].message
          }
        })
      })

  }

  static login(req, res, next) {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(result => {
        let checkPass = comparePass(req.body.password, result.password)
        if (checkPass) {
          let payLoad = {
            id: result.id,
            email: result.email
          }
          let token = tokenGenerate(payLoad)
          res.status(200).json(token)
        } else {
          next({
            status: 400,
            msg: {
              err: 'Email / Password is Wrong'
            }
          })
        }
      })
      .catch(err => {
        next({
          status: 400,
          msg: {
            err: 'Email / Password is Wrong'
          }
        })
      })
  }

  static gooLogin(req, res, next) {
    const emailCheck = {}
    const client = new OAuth2Client(process.env.CLIENT_ID);
    const token = req.headers.token
    let fullname;
    client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID
      // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    })
      .then(ticket => {
        let payLoad = ticket.getPayload()
        emailCheck.email = payLoad.email
        fullname = payLoad.name
        return User.findOne({
          where: {
            email: emailCheck.email
          }
        })
      })
      .then(user => {
        if (user) {
          User.findOne({
            where: {
              email: emailCheck.email
            }
          })
            .then(result => {
              let checkPass = comparePass(process.env.password, result.password)
              if (checkPass) {
                let payLoad = {
                  id: result.id,
                  email: result.email
                }
                let token = tokenGenerate(payLoad)
                res.status(200).json(token)
              } else res.status(400).json('email / password is Wrong')
            })

        } else {
          User.create({
            fullname: fullname,
            email: emailCheck.email,
            password: process.env.password,
            no_hp: process.env.no_hp,
            createdAt: new Date(),
            updatedAt: new Date()
          })
            .then(result => {
              let payload = {
                id: result.id,
                email: result.email
              }
              let token = tokenGenerate(payload)
              res.status(200).json(token)
            })
            .catch(err => {
              next({
                status: 400,
                msg: {
                  err: err.errors[0].message
                }
              })
            })
        }
      })
      .catch(err => {
        next({
          status: 500,
          msg: {
            err: 'Internal Error'
          }
        })
      })


  }
}

module.exports = UserController