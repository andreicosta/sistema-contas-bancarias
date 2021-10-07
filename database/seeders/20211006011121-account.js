'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Account', [{
      id: 1,
      type: 'Conta Corrente',
      agency: '0001',
      number: '1234',
      checkNumber: 0,
      balance: 6,
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Account', null, {});
  }
};
