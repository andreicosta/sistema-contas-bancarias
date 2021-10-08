<template>
  <div>
    <div v-if="insertTransactionSuccess">
      Depósito realizado com sucesso!<br>
      <router-link to="/">
        Clique aqui
      </router-link> para voltar.
    </div>
    <div v-else>
      <h1>Faça um depósito</h1>
      <form @submit.prevent="insertTransaction('deposit', value)">
        <MoneyInput
          v-model="value"
          class="mb-3"
          sub-text="Insira o valor que deseja depositar."
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
          Depositar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import MoneyInput from '@/components/MoneyInput.vue';
import InsertTransaction from '@/mixins/InsertTransaction';

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
