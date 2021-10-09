/* eslint-disable no-param-reassign */
import { get } from '@/api';

export default {
  namespaced: true,
  state() {
    return {
      loading: true,
      accounts: null,
    };
  },
  mutations: {
    loaded(state, accounts) {
      state.loading = false;
      state.accounts = accounts;
    },
  },
  actions: {
    load({ getters, commit }) {
      if (getters.loaded) {
        return;
      }

      get('account').then((resp) => {
        commit('loaded', resp);
      });
    },
  },
  getters: {
    loaded: (state) => state.accounts !== null,
  },
};
