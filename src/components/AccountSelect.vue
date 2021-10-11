<template>
  <div v-if="loading">
    carregando contas
  </div>
  <div v-else-if="loadingAccount">
    carregando conta
  </div>
  <div
    v-else
    class="my-4 p-4 border mx-auto form-container"
  >
    <h4>Escolha uma conta para continuar</h4>
    <form @submit.prevent="selectedAccount">
      <select
        v-model="accountSelected"
        class="form-select"
      >
        <option
          disabled
          selected
          value=""
        >
          Escolha uma conta
        </option>
        <option
          v-for="account in accounts"
          :key="account.id"
          :value="account.id"
        >
          {{ account.type }}: {{ account.agency }}
          {{ account.number }}-{{ account.checkNumber }}
        </option>
      </select>
      <button
        type="submit"
        class="btn btn-primary my-2"
        :disabled="accountSelected === ''"
      >
        Continuar
      </button>
    </form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapGetters, mapState } = createNamespacedHelpers('accounts');

export default {
  name: 'AccountSelect',
  data() {
    return {
      loadingAccount: false,
      accountSelected: '',
    };
  },
  computed: {
    ...mapGetters({
      loaded: 'loaded',
    }),
    ...mapState({
      accounts: (state) => state.accounts,
      loading: (state) => state.loading,
    }),
  },
  created() {
    this.$store.dispatch('accounts/load');
  },
  methods: {
    selectedAccount() {
      this.loadingAccount = true;
      this.$store.dispatch('account/load', { id: this.accountSelected });
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 500px;
}
</style>
