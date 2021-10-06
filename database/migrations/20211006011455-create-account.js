'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Account', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      agency: {
        allowNull: false,
        type: Sequelize.STRING
      },
      number: {
        allowNull: false,
        type: Sequelize.STRING
      },
      checkNumber: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      balance: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Account');
  }
};