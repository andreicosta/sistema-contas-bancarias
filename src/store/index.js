import Vue from 'vue';
import Vuex from 'vuex';
import account from '@/store/account';
import accounts from '@/store/accounts';

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    account,
    accounts,
  },
});

export default store;
