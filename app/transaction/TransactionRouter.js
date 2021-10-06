const express = require('express');
const { body, validationResult } = require('express-validator');
const TransactionController = require('./TransactionController');

const router = express.Router();

router.get('/', function (req, res) {
  return (new TransactionController()).list(req, res);
});

router.post('/',
  body('value').isDecimal({ decimal_digits: '0,2', locale: 'en-US' }).isFloat({ min: 0 }).toFloat(),
  body('type').isIn([ 'deposit', 'redeem', 'payment' ]),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    next();
  },

  (req, res) => {
    return (new TransactionController()).create(req, res);
  }
);

module.exports = router;