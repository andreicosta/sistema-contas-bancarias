<template>
  <li class="d-flex align-items-center">
    <div class="ms-2 me-5">
      <img
        :src="icon"
        :alt="description"
        width="24"
        height="24"
      >
    </div>
    <div class="d-flex flex-column">
      <span class="fw-bold">{{ description }}</span>
      <span>{{ value | money }}</span>
    </div>
    <span class="text-secondary ms-auto">{{ date | dateFormat }}</span>
  </li>
</template>

<script>
import moment from 'moment';
import Money from '@/mixins/Money';

export default {
  name: 'Transaction',
  filters: {
    dateFormat(content) {
      return moment(content, 'YYYY-MM-DD').format('DD/MM/YYYY');
    },
  },
  mixins: [
    Money,
  ],
  props: {
    type: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  computed: {
    description() {
      if (this.type === 'deposit') {
        return 'Depósito recebido';
      } if (this.type === 'redeem') {
        return 'Resgate efetuado';
      } if (this.type === 'payment') {
        return 'Pagamento efetuado';
      }

      return '';
    },
    icon() {
      let icon = '';
      if (this.type === 'deposit') {
        icon = 'cash-coin';
      } else if (this.type === 'redeem') {
        icon = 'wallet2';
      } else if (this.type === 'payment') {
        icon = 'box-arrow-left';
      }

      return `/assets/icons/${icon}.svg`;
    },
  },
};
</script>
