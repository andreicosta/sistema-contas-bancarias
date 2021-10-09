let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
const chaiSubset = require('chai-subset');
chai.use(chaiSubset);
let should = chai.should();
const { expect } = chai;

chai.use(chaiHttp);

describe('Account', () => {
  describe('return accounts', () => {
    it('returns a list of all accounts', (done) => {
      chai.request(server.app)
        .get('/account')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          expect(res.body).to.containSubset([{
            id: 1,
          },{
            id: 2,
          },{
            id: 3,
          }]);
          done();
        });
      });
    });

  describe('return account', () => {
    it('request invalid account id', (done) => {
      chai.request(server.app)
        .get('/account/1s')
        .end((err, res) => {
          res.should.have.status(422);
          done();
        });
      });

    it('request inexistent account id', (done) => {
      chai.request(server.app)
        .get('/account/123')
        .end((err, res) => {
          res.should.have.status(422);
          done();
        });
      });

    it('returns the requested account', (done) => {
      chai.request(server.app)
        .get('/account/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.deep.equal({
            id: 1,
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