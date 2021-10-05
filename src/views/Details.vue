<template>
  <div>
    <h1>Extrato da conta</h1>
    <h4>Transações</h4>
    <div v-if="isLoading">
      carregando
    </div>
    <div v-else-if="transactions.length === 0">
      Nenhuma transação encontrada
    </div>
    <div v-else>
      <Transaction
        v-for="transaction in transactions"
        :key="transaction.id"
        :type="transaction.type"
        :data="transaction.data"
        :value="transaction.value"
        :operation="transaction.operation"
      />
    </div>
  </div>
</template>

<script>
import { get } from '@/api';
import Transaction from '@/components/Transaction.vue';

export default {
  name: 'Details',
  components: {
    Transaction,
  },
  data() {
    return {
      isLoading: true,
      transactions: null,
    };
  },
  mounted() {
    get('transactions').then((resp) => {
      this.isLoading = false;
      this.transactions = resp;
    });
  },
};
</script>
