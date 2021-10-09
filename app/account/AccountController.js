const AccountRepository = require('./AccountRepository');

module.exports = class AccountController {
  async get(req, res) {
    const account = await AccountRepository.getRaw(
      req.params.id,
      ['id', 'type', 'agency', 'number', 'checkNumber', 'balance']
    );

    return res.json(account);
  }

  async list(req, res) {
    const accountList = await AccountRepository.list(
      ['id', 'type', 'agency', 'number', 'checkNumber']
    );

    return res.json(accountList);
  }
}