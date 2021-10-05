<template>
  <div class="row">
    <div class="col-8">
      <h2>Olá!</h2>
      <h4>Escolha umas das possíveis ações abaixo:</h4>
    </div>
    <MyAccount class="col-4" />
  </div>
</template>

<script>
import MyAccount from '@/components/MyAccount.vue';

export default {
  name: 'Home',
  components: {
    MyAccount,
  },
};
</script>
