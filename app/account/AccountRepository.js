module.exports = class AccountRepository {
  constructor() {
    this.balance = 0;

    this.account = {
      id: 1,
      agency: '0001',
      number: '1234',
      checkNumber: 0,
      type: 'Conta Corrente',
    };
  }

  async findOne() {
    const ret = this.account;
    ret.balance = this.balance;
    return ret;
  }

  async update(args) {
    this.balance = args.balance;
  }

  static getInstance() {
    if (!AccountRepository.instance) {
      AccountRepository.instance = new AccountRepository();
    }

    return AccountRepository.instance;
  }
}