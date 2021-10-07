const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const chaiSubset = require('chai-subset');
chai.use(chaiSubset);
const { should, expect } = chai;

chai.use(chaiHttp);

describe('AccountTransaction', () => {
  describe('/GET transaction', () => {
    it('it should GET user account transactions', (done) => {
      chai.request(server.app)
        .get('/transaction')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          expect(res.body).to.containSubset([{
            date: "2021-01-01 12:14:12",
            type: "payment",
            value: 2,
          },{
            date: "2021-01-01 12:13:12",
            type: "redeem",
            value: 1,
          },{
            date: "2021-01-01 12:12:12",
            type: "deposit",
            value: 10,
          }]);
          done();
        });
      });
    });

  describe('test impossible transaction', () => {
    it('fails when args are not passed', (done) => {
      chai.request(server.app)
        .post('/transaction')
        .end((err, res) => {
          res.should.have.status(422);
          done();
      });
    });

    it('returns success false when there is not suficient balance to transaction', (done) => {
      chai.request(server.app)
        .post('/transaction')
        .send({
          type: 'payment',
          value: 100000,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.deep.equal({
            success: false,
            error: 'Saldo insuficiente',
          });
          done();
        });
      });
    });

  describe('test possible transaction', () => {
    it('payment can be done', (done) => {
      chai.request(server.app)
        .post('/transaction')
        .send({
          type: 'payment',
          value: 1,
        })
        .end((err, res) => {
          res.should.have.status(200);
          console.log(res.body);
          res.body.should.be.deep.equal({
            success: true,
          });
          done();
      });
    });

    it('account balance was updated', (done) => {
      chai.request(server.app)
        .get('/account')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.deep.equal({
            type: "Conta Corrente",
            agency: "0001",
            number: "1234",
            checkNumber: 0,
            balance: 6,
          });
          done();
        });
    });

    it('transaction created is listed', (done) => {
      chai.request(server.app)
        .get('/transaction')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          expect(res.body).to.containSubset([{
            type: "payment",
            value: 1,
          }]);
          done();
        });
    });
  });
});