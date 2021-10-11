<template>
  <nav
    class="px-3 navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between"
  >
    <span>
      <router-link
        v-show="!isHome"
        to="/"
      >
        Voltar
      </router-link>
    </span>
    <a
      href=""
      @click.prevent="exit"
    >Sair</a>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    isHome() {
      return this.$route.path === '/';
    },
  },
  methods: {
    exit() {
      this.$store.dispatch('account/free');
    },
  },
};
</script>
