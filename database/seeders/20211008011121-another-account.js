'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Account', [{
      id: 2,
      type: 'Conta Corrente',
      agency: '0001',
      number: '3324',
      checkNumber: 1,
      balance: 0,
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Account', { id: 2 });
  }
};
