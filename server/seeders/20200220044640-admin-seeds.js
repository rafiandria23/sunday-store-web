'use strict';

const encryptPassword = require('../helpers/encrypt-password');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'Adam Rafiandri',
      email: 'adam@sunday.com',
      password: encryptPassword('123'),
      role: 'Super Admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
