<template>
  <div>
    <div v-if="success">
      Pagamento realizado com sucesso!<br>
      <router-link to="/">
        Clique aqui
      </router-link> para voltar.
    </div>
    <div v-else>
      <h1>Faça um pagamento</h1>
      <form @submit.prevent="submit">
        <div class="mb-3">
          <label
            for="InputPayment"
            class="form-label"
          >Valor:</label>
          <div class="input-group">
            <div class="input-group-text">
              R$
            </div>
            <input
              id="InputPayment"
              v-model="value"
              type="number"
              class="form-control"
              required
              step="0.01"
              min="0"
            >
          </div>
          <div class="form-text">
            Insira o valor que deseja pagar.
          </div>
        </div>
        <div
          v-if="error"
          class="alert alert-danger"
          role="alert"
        >
          {{ error }}
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
import { post } from '@/api';

const DEFAULT_ERROR_MSG = 'Ocorreu um erro inesperado, tente novamente.';

export default {
  name: 'Deposit',
  data() {
    return {
      loading: false,
      error: null,
      success: false,
      value: 0,
    };
  },
  methods: {
    submit() {
      this.loading = true;
      this.error = null;

      return post('operation', {
        type: 'payment',
        value: this.value,
      })
        .then((result) => {
          this.success = !!result.success;
          if (!this.success) {
            this.error = result.message || DEFAULT_ERROR_MSG;
          }
        })
        .catch(() => {
          this.error = DEFAULT_ERROR_MSG;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
