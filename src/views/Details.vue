<template>
  <div>
    <h1>Extrato da conta</h1>

    <div>Saldo disponível: {{ accountBalance | money }}</div>

    <h4>Histórico</h4>
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
        :date="transaction.date"
        :value="transaction.value"
      />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import { get } from '@/api';
import Transaction from '@/components/Transaction.vue';
import Money from '@/mixins/Money';

const { mapState } = createNamespacedHelpers('account');

export default {
  name: 'Details',
  components: {
    Transaction,
  },
  mixins: [
    Money,
  ],
  data() {
    return {
      isLoading: true,
      transactions: null,
    };
  },
  computed: {
    ...mapState({
      accountBalance: (state) => state.balance,
    }),
  },
  mounted() {
    get('transaction').then((resp) => {
      this.isLoading = false;
      this.transactions = resp;
    });
  },
};
</script>
