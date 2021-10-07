const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

const path = __dirname + '/../dist/';
const app = express();

app.use(express.static(path));

app.get('/', function (req, res) {
  return res.redirect('/index.html');
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});