const express = require('express');
const cors = require('cors');
const AccountController = require('./account/AccountController');

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});