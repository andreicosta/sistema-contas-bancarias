# Sistema de contas bancárias

Sistema para gerenciar contas bancárias, os tipos de ação disponíveis são: pagamento, depósito e transferência. E ainda é possível visualizar o histórico das transações.

O projeto engloba front e back-end. Ao rodar, o front estará disponível em http://localhost:8080 e o back-end em http://localhost:3000. A documentação do back-end está disponível em http://localhost:3000/docs/.

O sistema usa um banco SQLite para persistir os dados. Para rodar os testes automatizados uma instância desse banco é preparada apenas para essa finalidade.

TODO: Sistema de login.
TODO: Fazer um design adequado.

## Setup do projeto
```
npm install
```

### Linter
```
npm run lint
```

### Testes automatizados
```
npm run test
```

### Inicia a aplicação
```
npm run app
```