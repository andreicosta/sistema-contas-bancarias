const express = require('express');
const cors = require('cors');
const AccountController = require('./account/AccountController');
const OperationController = require('./operation/OperationController');
const TransactionController = require('./transaction/TransactionController');

const path = __dirname + '/../dist/';
const app = express();

app.use(express.static(path));

app.get('/', function (req, res) {
  return res.redirect('/index.html');
});

app.use(cors());
app.use(express.json());

app.get('/account', function (req, res) {
  return (new AccountController()).get(req, res);
});

app.get('/transactions', function (req, res) {
  return (new TransactionController()).list(req, res);
});

app.post('/operation', function (req, res) {
  return (new OperationController()).create(req, res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});