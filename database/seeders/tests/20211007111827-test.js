'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Account', [{
      id: 1,
      type: 'Conta Corrente',
      agency: '0001',
      number: '1234',
      checkNumber: 0,
      balance: 7,
    },{
      id: 2,
      type: 'Conta Corrente',
      agency: '0001',
      number: '3212',
      checkNumber: 1,
      balance: 3,
    }], {});

    await queryInterface.bulkInsert('AccountTransaction', [{
      id: 1,
      AccountId: 1,
      type: 'deposit',
      value: 10,
      date: '2021-01-01 12:12:12',
    },{
      id: 2,
      AccountId: 1,
      type: 'redeem',
      value: 1,
      date: '2021-01-01 12:13:12',
    },{
      id: 3,
      AccountId: 1,
      type: 'payment',
      value: 2,
      date: '2021-01-01 12:14:12',
    },{
      id: 4,
      AccountId: 2,
      type: 'deposit',
      value: 3,
      date: '2021-01-01 12:15:12',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('AccountTransaction', null, {});
    await queryInterface.bulkDelete('Account', null, {});
  }
};
