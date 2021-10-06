module.exports = {
  filters: {
    money: function(content) {
      return content.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    }
  }
}
