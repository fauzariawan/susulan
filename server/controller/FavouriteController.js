
const { Favourite, Joke } = require('../models')

class FavouriteController {
  static async addFavourite(req, res, next) {
    try {
      const userLogedIn = req.userLogedIn
      console.log(userLogedIn)
      const JokeId = req.body.JokeId
      const newFavourite = {
        JokeId: JokeId,
        UserId: userLogedIn.id
      }
      const result = await Favourite.create(newFavourite)
      res.status(201).json(result)
    } catch (error) {

    }
  }
  static async allFavourite(req, res, next) {
    try {
      const result = await Favourite.findAll({ include: [Joke] })
      res.status(200).json(result)
    } catch (error) {

    }
  }
}

module.exports = FavouriteController