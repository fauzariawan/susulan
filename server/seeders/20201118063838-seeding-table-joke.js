'use strict';

const data = require('../joke.json')
module.exports = {
  up: (queryInterface, Sequelize) => {
    data.forEach(data => {
      data.createdAt = new Date()
      data.updatedAt = new Date()
    })
    return queryInterface.bulkInsert('Jokes', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Jokes', null, {})
  }
};
