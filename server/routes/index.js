const router = require('express').Router()
const UserController = require('../controller/UserController')
const JokesController = require('../controller/JokesController')
const FavouriteController = require('../controller/FavouriteController')
const { authentication } = require('../authentication/authentication')

router.post('/signUp', UserController.signUp)
router.post('/signIn', UserController.signIn)
router.use(authentication)
router.get('/jokes/random', JokesController.randomJokes)
router.post('/jokes', JokesController.addJokes)
router.post('/favourites', FavouriteController.addFavourite)
router.get('/favourites', FavouriteController.allFavourite)

module.exports = router