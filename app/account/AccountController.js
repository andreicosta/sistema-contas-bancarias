module.exports = class AccountController {
  async get(req, res) {
    return res.json({
      id: 1,
      agency: '0001',
      number: '1234',
      checkNumber: 0,
      balance: 0,
      type: 'Conta Corrente',
    });
  }
}