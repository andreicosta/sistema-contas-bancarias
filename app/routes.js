const express = require('express');
const { body, param, validationResult } = require('express-validator');
const AccountController = require('./account/AccountController');
const AccountValidator = require('./account/AccountValidator');
const TransactionController = require('./transaction/TransactionController');

const router = express.Router();

// TODO: passar para uma classe de validação genérica
const validatorResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  next();
}

router.get('/account', (req, res) => {
  // #swagger.description = 'Rota para obter a lista de contas disponíveis.'
  /* #swagger.responses[200] = {
    description: 'Lista de contas disponíveis.'
  } */

  return (new AccountController()).list(req, res);
});

router.get('/account/:id',
  param('id').isInt().custom(AccountValidator.exists),
  validatorResult,

  (req, res) => {
    // #swagger.description = 'Rota para obter uma conta do usuário.'
    // #swagger.parameters['id'] = { description: 'Id da conta do usuário.' }
    /* #swagger.responses[200] = {
      description: 'Detalhes da conta do usuário.'
    } */
    /* #swagger.responses[404] = {
      description: 'Conta não encontrada.'
    } */

    return (new AccountController()).get(req, res);
  }
);

router.get('/account/:id/transaction',
  param('id').isInt().custom(AccountValidator.exists),
  validatorResult,

  (req, res) => {
    // #swagger.description = 'Rota para obter as transações da conta do usuário.'
    // #swagger.parameters['id'] = { description: 'Id da conta do usuário.' }
    /* #swagger.responses[200] = {
      description: 'Lista de transações da conta do usuário.'
    } */

    return (new TransactionController()).list(req, res);
  }
);

router.post('/account/:id/transaction',
  body('value').isDecimal({ decimal_digits: '0,2', locale: 'en-US' }).isFloat({ min: 0.01 }).toFloat(),
  body('type').isIn([ 'deposit', 'redeem', 'payment' ]),
  param('id').isInt().custom(AccountValidator.exists),
  validatorResult,

  (req, res) => {
    // #swagger.description = 'Rota criar uma nova transação para a conta do usuário.'
    // #swagger.parameters['id'] = { description: 'Id da conta do usuário.' }
    /* #swagger.responses[200] = {
      description: 'Sucesso na criação da transação.'
    } */

    return (new TransactionController()).create(req, res);
  }
);

module.exports = router;