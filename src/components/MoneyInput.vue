<template>
  <div>
    <label
      for="InputPayment"
      class="form-label"
    >Valor:</label>
    <div class="input-group">
      <div class="input-group-text">
        R$
      </div>
      <input
        id="InputPayment"
        v-model="value"
        type="number"
        class="form-control"
        required
        step="0.01"
        min="0.01"
        @input="$emit('input', $event.target.value)"
      >
    </div>
    <div
      v-if="subText"
      class="form-text"
    >
      {{ subText }}
    </div>
  </div>
</template>

<script>
import Money from '@/mixins/Money';

export default {
  name: 'MoneyInput',
  mixins: [
    Money,
  ],
  props: {
    subText: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      value: 0,
    };
  },
};
</script>
