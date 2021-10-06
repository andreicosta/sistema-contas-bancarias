'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'AccountTransaction',
      'AccountId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Account',
          key: 'id',
        },
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(
      'AccountTransaction',
      'AccountId'
    );
  }
};