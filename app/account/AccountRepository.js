const { Account } = require('../../database/models');

module.exports = class AccountRepository {
  static async findOne() {
    return await Account.findOne({
      attributes: ['type', 'agency', 'number', 'checkNumber', 'balance'],
      raw: true,
    });
  }

  static async updateBalance(newBalance) {
    return await Account.update(
      { balance: newBalance },
      { where: { } }
    );
  }
}