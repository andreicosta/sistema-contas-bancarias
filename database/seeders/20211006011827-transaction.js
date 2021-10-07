'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('AccountTransaction', [{
      type: 'payment',
      value: 4,
      date: new Date(),
    },{
      type: 'deposit',
      value: 10,
      date: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('AccountTransaction', null, {});
  }
};
