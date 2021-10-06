const AccountRepository = require('../account/AccountRepository');
const TransactionRepository = require('../transaction/TransactionRepository');

module.exports = class TransactionDTO {
  constructor(type, value) {
    this.type = type;
    this.value = value;
    this.error = undefined;
  }

  async isValid() {
    const account = await AccountRepository.findOne();
    let accountHasFund = true;

    if (['payment', 'redeem'].includes(this.type)) {
      accountHasFund = account.balance >= this.value;
    }

    if (!accountHasFund) {
      this.error = 'Saldo insuficiente';
    }

    return accountHasFund;
  }

  async save() {
    const isValid = await this.isValid();
    if (!isValid) {
      return false;
    }

    await TransactionRepository.create({
      type: this.type,
      value: this.value,
    });

    const account = await AccountRepository.findOne();

    let newBalance = account.balance;
    if (['payment', 'redeem'].includes(this.type)) {
      newBalance -= this.value;
    } else {
      newBalance += this.value;
    }

    await AccountRepository.updateBalance(newBalance);

    return true;
  }

  getError() {
    return this.error;
  }
}