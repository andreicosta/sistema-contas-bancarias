const express = require("express");

const path = __dirname + '/../dist/';
const app = express();

app.use(express.static(path));

app.get('/', function (req,res) {
  return res.redirect('/index.html');
});

app.get('/teste', function (req,res) {
  res.json({ status: 'OK' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});