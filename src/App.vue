<template>
  <div v-if="isLoadingAccount">
    carregando dados da conta
  </div>
  <div v-else-if="!loaded">
    <AccountSelect />
  </div>
  <div
    v-else
    id="app"
  >
    <nav
      v-show="hasNavBar"
      class="container-fluid navbar navbar-expand-lg navbar-light bg-light"
    >
      <router-link to="/">
        Voltar
      </router-link>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import AccountSelect from '@/components/AccountSelect.vue';

const { mapGetters, mapState } = createNamespacedHelpers('account');

export default {
  name: 'App',
  components: {
    AccountSelect,
  },
  computed: {
    ...mapGetters([
      'loaded',
    ]),
    ...mapState({
      isLoadingAccount: (state) => !!state.loading,
    }),
    hasNavBar() {
      return !!this.$route.meta.hasNavBar;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
