const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
  version: "1.0.0",
    title: "Sistema de contas bancárias",
    description: "Sistema simples para gestão de transações em contas bancárias."
  },
  host: "localhost:3000",
  basePath: "/",
  schemes: ['http'],
  consumes: ['application/json'],
  produces: ['application/json'],
};

const outputFile = './app/swagger_output.json';
const endpointsFiles = ['./app/routes.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('./server')
})
