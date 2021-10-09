const { Account, AccountTransaction } = require('../../database/models');

module.exports = class AccountRepository {
  static async list(columns) {
    return await Account.findAll({
      attributes: columns,
      raw: true,
    });
  }

  static async get(id) {
    return await Account.findOne({
      where: {
        id,
      },
    });
  }

  static async getRaw(id, columns) {
    return await Account.findOne({
      attributes: columns,
      where: {
        id,
      },
      raw: true,
    });
  }

  static async updateBalance(account, newBalance) {
    account.balance = newBalance;
    return await account.save();
  }
}