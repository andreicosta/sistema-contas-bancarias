/* eslint-disable no-param-reassign */
import { get } from '@/api';

export default {
  namespaced: true,
  state() {
    return {
      loading: false,
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
    free(state) {
      state.loading = false;
      state.id = null;
      state.agency = null;
      state.number = null;
      state.checkNumber = null;
      state.type = null;
      state.balance = null;
    },
  },
  actions: {
    load({ getters, commit }, account) {
      if (getters.loaded) {
        return;
      }

      get(`account/${account.id}`).then((resp) => {
        commit('loaded', resp);
      });
    },
    updateBalance({ commit, state }) {
      get(`account/${state.id}`).then((resp) => {
        commit('updateBalance', resp.balance);
      });
    },
    free({ commit }) {
      commit('free');
    },
  },
  getters: {
    loaded: (state) => state.id !== null,
  },
};
