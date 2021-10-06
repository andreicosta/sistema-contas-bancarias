module.exports = class TransactionRepository {
  constructor() {
    this.list = [];
  }

  async create(data) {
    data.id = TransactionRepository.nextId;
    data.date = (new Date).toISOString();
    this.list.push(data);
    TransactionRepository.nextId += 1;
  }

  findAll() {
    return this.list;
  }

  static getInstance() {
    if (!TransactionRepository.instance) {
      TransactionRepository.nextId = 0;
      TransactionRepository.instance = new TransactionRepository();
    }

    return TransactionRepository.instance;
  }
}