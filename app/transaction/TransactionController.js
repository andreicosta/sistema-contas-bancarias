const TransactionDTO = require('./TransactionDTO');
const TransactionRepository = require('./TransactionRepository');

module.exports = class TransactionController {
  async list(req, res) {
    return res.json(await TransactionRepository.findAll());
  }

  async create(req, res) {
    const dto = new TransactionDTO(req.body.type, req.body.value);

    return res.json({
      success: await dto.save(),
      error: dto.getError(),
    });
  }
}