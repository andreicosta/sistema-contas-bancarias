<template>
  <div class="border-start text-center">
    <h4>Minha conta</h4>
    <ul>
      <li>Agência: {{ accountAgency }}</li>
      <li>Conta e Dígito: {{ accountNumber }}</li>
      <li>Tipo: {{ accountType }}</li>
      <li>Saldo: {{ accountBalance | money }}</li>
    </ul>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Money from '@/mixins/Money';

const { mapState } = createNamespacedHelpers('account');

export default {
  name: 'MyAccount',
  mixins: [
    Money,
  ],
  computed: {
    ...mapState({
      accountAgency: (state) => state.agency,
      accountNumber: (state) => `${state.number}-${state.checkNumber}`,
      accountType: (state) => state.type,
      accountBalance: (state) => state.balance,
    }),
  },
};
</script>
