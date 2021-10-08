<template>
  <div>
    <div v-if="insertTransactionSuccess">
      Pagamento realizado com sucesso!<br>
      <router-link to="/">
        Clique aqui
      </router-link> para voltar.
    </div>
    <div v-else>
      <h1>Faça um pagamento</h1>
      <form @submit.prevent="insertTransaction('payment', value)">
        <MoneyInput
          v-model="value"
          class="mb-3"
          sub-text="Insira o valor que deseja pagar."
        />
        <div
          v-if="insertTransactionError"
          class="alert alert-danger"
          role="alert"
        >
          {{ insertTransactionError }}
        </div>
        <button
          type="submit"
          class="btn btn-primary"
        >
          Pagar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import InsertTransaction from '@/mixins/InsertTransaction';
import MoneyInput from '@/components/MoneyInput.vue';

export default {
  name: 'Deposit',
  components: {
    MoneyInput,
  },
  mixins: [
    InsertTransaction,
  ],
  data() {
    return {
      value: 0,
    };
  },
};
</script>
