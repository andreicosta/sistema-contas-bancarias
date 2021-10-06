'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Account.hasMany(models.AccountTransaction);
    }
  };
  Account.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING
    },
    agency: {
      allowNull: false,
      type: DataTypes.STRING
    },
    number: {
      allowNull: false,
      type: DataTypes.STRING
    },
    checkNumber: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    balance: {
      allowNull: false,
      type: DataTypes.DECIMAL(10, 2)
    },
  }, {
    sequelize,
    modelName: 'Account',
    timestamps: false,
    freezeTableName: true,
  });
  return Account;
};