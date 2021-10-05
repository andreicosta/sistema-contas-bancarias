import Vue from 'vue';
import Vuex from 'vuex';
import account from '@/store/account';

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
  modules: {
    account,
  },
});

export default store;
