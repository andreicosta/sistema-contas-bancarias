const AccountRepository = require('../account/AccountRepository');
const TransactionRepository = require('../transaction/TransactionRepository');

module.exports = class TransactionDTO {
  constructor(type, value) {
    this.type = type;
    this.value = value;
    this.error = undefined;
  }

  async isValid(account) {
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
    const account = await AccountRepository.get();

    const isValid = await this.isValid(account);
    if (!isValid) {
      return false;
    }

    await TransactionRepository.create({
      AccountId: account.id,
      type: this.type,
      value: this.value,
    });

    let newBalance = account.balance;
    if (['payment', 'redeem'].includes(this.type)) {
      newBalance -= this.value;
    } else {
      newBalance += this.value;
    }

    await AccountRepository.updateBalance(account, newBalance);

    return true;
  }

  getError() {
    return this.error;
  }
}