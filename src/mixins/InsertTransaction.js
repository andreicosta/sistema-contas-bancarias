import { post } from '@/api';

const DEFAULT_ERROR_MSG = 'Ocorreu um erro inesperado, tente novamente.';

export default {
  data() {
    return {
      insertTransactionLoading: false,
      insertTransactionSuccess: false,
      insertTransactionError: null,
    };
  },
  methods: {
    insertTransaction(type, value) {
      if (this.insertTransactionLoading) {
        return;
      }

      this.insertTransactionLoading = true;
      this.insertTransactionError = null;

      post('transaction', {
        type,
        value,
      })
        .then((result) => {
          this.insertTransactionSuccess = !!result.success;

          if (!this.insertTransactionSuccess) {
            this.insertTransactionError = result.error || DEFAULT_ERROR_MSG;
            return;
          }

          this.$store.dispatch('account/updateBalance');
        })
        .catch(() => {
          this.insertTransactionError = DEFAULT_ERROR_MSG;
        })
        .finally(() => {
          this.insertTransactionLoading = false;
        });
    },
  },
};
