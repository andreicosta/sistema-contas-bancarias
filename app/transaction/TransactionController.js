const TransactionDTO = require('./TransactionDTO');
const AccountRepository = require('../account/AccountRepository');
const TransactionRepository = require('./TransactionRepository');

module.exports = class TransactionController {
  async list(req, res) {
    const account = await AccountRepository.get(req.params.id);

    return res.json(await TransactionRepository.fromAccount(account));
  }

  async create(req, res) {
    const dto = new TransactionDTO(req.params.id, req.body.type, req.body.value);

    return res.json({
      success: await dto.save(),
      error: dto.getError(),
    });
  }
}