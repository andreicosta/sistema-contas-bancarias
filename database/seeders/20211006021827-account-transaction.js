'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate('AccountTransaction', {
      AccountId: 1,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkUpdate('AccountTransaction', {
      AccountId: null,
    });}
};
