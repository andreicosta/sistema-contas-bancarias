const { AccountTransaction } = require('../../database/models');

module.exports = class TransactionRepository {
  static async create(data) {
    return await AccountTransaction.create(data);
  }

  static async fromAccount(account) {
    return await account.getAccountTransactions({
      attributes: ['type', 'value', 'date'],
      order: [
        ['date', 'DESC'],
      ],
      raw: true,
    });
  }
}