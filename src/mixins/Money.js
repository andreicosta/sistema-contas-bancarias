module.exports = {
  filters: {
    money(content) {
      return content.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    },
  },
};
