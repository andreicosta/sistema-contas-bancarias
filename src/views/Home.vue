<template>
  <div class="row pt-5">
    <div class="col-8">
      <h2>Olá!</h2>

      <router-link to="/details">
        Ver extrato
      </router-link><br>
      <router-link to="/deposit">
        Depositar
      </router-link><br>
      <router-link to="/redeem">
        Resgatar
      </router-link><br>
      <router-link to="/payment">
        Pagar
      </router-link>
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
