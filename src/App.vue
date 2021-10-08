<template>
  <div v-if="isLoading">
    carregando
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

const { mapState } = createNamespacedHelpers('account');

export default {
  name: 'App',
  computed: {
    ...mapState({
      isLoading: (state) => !!state.loading,
    }),
    hasNavBar() {
      return !!this.$route.meta.hasNavBar;
    },
  },
  created() {
    this.$store.dispatch('account/load');
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
