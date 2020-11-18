const { Joke } = require('../models')

class JokesController {
  static async randomJokes(req, res, next) {
    try {
      const result = await Joke.findAll()
      const randomId = Math.floor(Math.random() * result.length);
      const randomJoke = await Joke.findByPk(randomId)
      res.status(200).json(randomJoke)
    } catch (error) {
      console.log(error)
    }
  }
  static async addJokes(req, res, next) {
    try {
      const newJokes = {
        category: req.body.category,
        setup: req.body.setup,
        delivery: req.body.delivery
      }
      const result = await Joke.create(newJokes)
      res.status(201).json({ joke: result })
    } catch (error) {

    }
  }
}

module.exports = JokesController