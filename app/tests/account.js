let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Account', () => {
  describe('returns user account', () => {
    it('it should GET user account', (done) => {
      chai.request(server.app)
        .get('/account')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.deep.equal({
            type: "Conta Corrente",
            agency: "0001",
            number: "1234",
            checkNumber: 0,
            balance: 7,
          });
          done();
        });
      });
    });
});