/* eslint-disable no-param-reassign */
import { get } from '@/api';

export default {
  namespaced: true,
  state() {
    return {
      loaded: false,
      loading: true,
      id: null,
      agency: null,
      number: null,
      checkNumber: null,
      type: null,
      balance: null,
    };
  },
  mutations: {
    loaded(state, {
      id, number, type, balance, checkNumber, agency,
    }) {
      state.loaded = true;
      state.loading = false;
      state.id = id;
      state.agency = agency;
      state.number = number;
      state.checkNumber = checkNumber;
      state.type = type;
      state.balance = balance;
    },
    updateBalance(state, balance) {
      state.balance = balance;
    },
  },
  actions: {
    load({ state, commit }) {
      if (state.loaded) {
        return;
      }

      get('account').then((resp) => {
        commit('loaded', resp);
      });
    },
    updateBalance({ commit }) {
      get('account').then((resp) => {
        commit('updateBalance', resp.balance);
      });
    },
  },
};
