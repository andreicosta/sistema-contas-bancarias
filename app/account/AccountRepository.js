const { Account, AccountTransaction } = require('../../database/models');

module.exports = class AccountRepository {
  static async first() {
    return await Account.findOne();
  }

  static async findOne() {
    return await Account.findOne({
      attributes: ['type', 'agency', 'number', 'checkNumber', 'balance'],
      raw: true,
    });
  }

  static async getTransactions() {
    const account = await Account.findOne();

    return await account.getAccountTransactions({
      attributes: ['id', 'type', 'value', 'date'],
      order: [
        ['date', 'DESC'],
      ],
      raw: true,
    });
  }

  static async updateBalance(account, newBalance) {
    account.balance = newBalance;
    return await account.save();
  }
}