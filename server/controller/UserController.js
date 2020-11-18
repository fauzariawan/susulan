const { User } = require('../models')
const { getToken } = require('../helper/jwt')
const { comparePassword } = require('../helper/bcrypt')

class UserController {
  static async signUp(req, res, next) {
    try {
      const newUser = {
        username: req.body.username,
        password: req.body.password
      }
      const result = await User.create(newUser)
      const payload = {
        username: result.username,
      }
      const token = getToken(payload)
      res.status(201).json({ username: result.username, token: token })
    } catch (error) {
      console.log(error)
    }
  }
  static async signIn(req, res, next) {
    try {
      const LoggedInUser = {
        username: req.body.username,
        password: req.body.password
      }
      const result = await User.findOne({
        where: { username: LoggedInUser.username }
      })
      if (!result) {
        throw ({ msg: "wrong username/password" })
      } else {
        const cekPassword = comparePassword(LoggedInUser.password, result.password)
        if (cekPassword) {
          const payload = {
            id: result.id,
            username: result.username
          }
          const token = getToken(payload)
          res.status(200).json({ username: payload.username, token: token })
        } else {
          throw ({ msg: "wrong username/password" })
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = UserController