const jwt = require('jsonwebtoken')

function getToken(payload) {
  const token = jwt.sign(payload, 'rahasia')
  return token
}

function verifyToken(token) {
  const decode = jwt.verify(token, 'rahasia')
  return decode
}

module.exports = { getToken, verifyToken }