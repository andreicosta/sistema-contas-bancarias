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
    <NavBar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import AccountSelect from '@/components/AccountSelect.vue';
import NavBar from '@/components/NavBar.vue';

const { mapGetters, mapState } = createNamespacedHelpers('account');

export default {
  name: 'App',
  components: {
    AccountSelect,
    NavBar,
  },
  computed: {
    ...mapGetters([
      'loaded',
    ]),
    ...mapState({
      isLoadingAccount: (state) => !!state.loading,
    }),
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
