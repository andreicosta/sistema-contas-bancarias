const AccountRepository = require('./AccountRepository');

module.exports = class AccountController {
  async get(req, res) {
    return res.json(await AccountRepository.getRaw(['type', 'agency', 'number', 'checkNumber', 'balance']));
  }
}