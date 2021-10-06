const { AccountTransaction } = require('../../database/models');

module.exports = class TransactionRepository {
  static async create(data) {
    return await AccountTransaction.create(data);
  }

  static async findAll() {
    return await AccountTransaction.findAll({
      attributes: ['id', 'date', 'type', 'value'],
      raw: true,
    });
  }
}