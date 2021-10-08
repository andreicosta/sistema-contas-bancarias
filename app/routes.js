const express = require('express');
const { body, validationResult } = require('express-validator');
const AccountController = require('./account/AccountController');
const TransactionController = require('./transaction/TransactionController');

const router = express.Router();

router.get('/account', function (req, res) {
  // #swagger.description = 'Rota para obter a conta do usuário.'
  /* #swagger.responses[200] = {
    description: 'Detalhes da conta do usuário.'
  } */

  return (new AccountController()).get(req, res);
});

router.get('/transaction', function (req, res) {
  // #swagger.description = 'Rota para obter as transações da conta do usuário.'
  /* #swagger.responses[200] = {
    description: 'Lista de transações da conta do usuário.'
  } */

  return (new TransactionController()).list(req, res);
});

router.post('/transaction',
  body('value').isDecimal({ decimal_digits: '0,2', locale: 'en-US' }).isFloat({ min: 0.01 }).toFloat(),
  body('type').isIn([ 'deposit', 'redeem', 'payment' ]),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    next();
  },

  (req, res) => {
    // #swagger.description = 'Rota criar uma nova transação para a conta do usuário.'
    /* #swagger.responses[200] = {
      description: 'Sucesso na criação da transação.'
    } */

    return (new TransactionController()).create(req, res);
  }
);

module.exports = router;