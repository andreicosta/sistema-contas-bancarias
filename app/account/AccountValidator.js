const { Account } = require('../../database/models');

module.exports = class AccountValidator {

  // Verifica se o id da conta existe na base de dados.
  static exists(id) {
    return Account.count({ where: { id } })
      .then((count) => {
        if (count === 0) {
          return Promise.reject('Conta não existe');
        }
      });
  }
}