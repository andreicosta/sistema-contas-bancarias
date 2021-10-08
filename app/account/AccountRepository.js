const { Account, AccountTransaction } = require('../../database/models');

module.exports = class AccountRepository {
  static async get() {
    return await Account.findOne();
  }

  static async getRaw(columns) {
    return await Account.findOne({
      attributes: columns,
      raw: true,
    });
  }

  static async updateBalance(account, newBalance) {
    account.balance = newBalance;
    return await account.save();
  }
}