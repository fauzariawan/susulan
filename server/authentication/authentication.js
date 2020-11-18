const { verifyToken } = require('../helper/jwt')
const { User } = require('../models')

async function authentication(req, res, next) {
  try {
    const token = req.headers.token

    if (!token) {
      throw ({ msg: 'authentication failed' })
    } else {
      const userLogedIn = verifyToken(token)
      console.log(userLogedIn)
      const userInDataBase = await User.findOne({
        where: { username: userLogedIn.username }
      })
      if (!userInDataBase) {
        throw ({ msg: 'authentication failed' })
      } else {
        req.userLogedIn = userLogedIn
        next()
      }
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = { authentication }