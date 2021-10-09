const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const chaiSubset = require('chai-subset');
chai.use(chaiSubset);
const { should, expect } = chai;

chai.use(chaiHttp);

describe('AccountTransaction', () => {
  describe('return transactions', () => {
    it('returns a list of account transactions', (done) => {
      chai.request(server.app)
        .get('/account/1/transaction')
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
        .post('/account/1/transaction')
        .end((err, res) => {
          res.should.have.status(422);
          done();
      });
    });

    it('fails when account does not exist', (done) => {
      chai.request(server.app)
        .post('/account/123/transaction')
        .end((err, res) => {
          res.should.have.status(422);
          done();
      });
    });

    it('returns false when there is not suficient balance to transaction', (done) => {
      chai.request(server.app)
        .post('/account/1/transaction')
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

    it('returns error when transaction value is zero', (done) => {
      chai.request(server.app)
        .post('/account/2/transaction')
        .send({
          type: 'redeem',
          value: 0,
        })
        .end((err, res) => {
          res.should.have.status(422);
          done();
        });
      });
    });

  describe('test possible transaction', () => {
    it('payment can be done', (done) => {
      chai.request(server.app)
        .post('/account/1/transaction')
        .send({
          type: 'payment',
          value: 1,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.deep.equal({
            success: true,
          });
          done();
      });
    });

    it('account balance was updated', (done) => {
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
            balance: 6,
          });
          done();
        });
    });

    it('transaction created is listed', (done) => {
      chai.request(server.app)
        .get('/account/1/transaction')
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

    it('transactions list of another account keeps empty', (done) => {
      chai.request(server.app)
        .get('/account/3/transaction')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.should.be.empty;
          done();
        });
    });
  });
});