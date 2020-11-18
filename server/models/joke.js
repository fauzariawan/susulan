'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Joke extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Joke.hasMany(models.Favourite)
      // define association here
    }
  };
  Joke.init({
    category: DataTypes.STRING,
    setup: DataTypes.STRING,
    delivery: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Joke',
  });
  return Joke;
};