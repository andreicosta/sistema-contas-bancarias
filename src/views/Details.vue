<template>
  <div class="col-sm-12 col-lg-8 offset-lg-2">
    <h1>Extrato da conta</h1>
    <div class="mb-2">
      Saldo disponível: {{ accountBalance | money }}
    </div>
    <h3>Histórico</h3>
    <div v-if="isLoading">
      carregando
    </div>
    <div v-else-if="transactions.length === 0">
      Nenhuma transação encontrada
    </div>
    <div
      v-else
      class="row"
    >
      <ul class="list-group list-group-flush">
        <Transaction
          v-for="transaction in transactions"
          :key="transaction.id"
          class="list-group-item"
          :type="transaction.type"
          :date="transaction.date"
          :value="transaction.value"
        />
      </ul>
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
      accountId: (state) => state.id,
      accountBalance: (state) => state.balance,
    }),
  },
  mounted() {
    get(`account/${this.accountId}/transaction`).then((resp) => {
      this.isLoading = false;
      this.transactions = resp;
    });
  },
};
</script>
