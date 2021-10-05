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

  async getTransactions(req, res) {
    return res.json([
      {
        id: 10,
        type: 'debit',
        data: '2021-10-04 23:00:00',
        value: 70,
        operation: {
          type: 'Transferência',
        },
      },
      {
        id: 5,
        type: 'debit',
        data: '2021-10-03 13:00:00',
        value: 30,
        operation: {
          type: 'Pagamento',
        },
      },
      {
        id: 1,
        type: 'credit',
        data: '2021-10-01 13:00:00',
        value: 100,
        operation: {
          type: 'Depósito',
        },
      },
    ]);
  }
}