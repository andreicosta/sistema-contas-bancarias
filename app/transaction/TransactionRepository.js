const { AccountTransaction } = require('../../database/models');

module.exports = class TransactionRepository {
  static async create(data) {
    return await AccountTransaction.create(data);
  }
}