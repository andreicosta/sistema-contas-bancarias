<template>
  <div>
    {{ date }}
    {{ type }}
    {{ value }}
  </div>
</template>

<script>
export default {
  name: 'Transaction',
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
};
</script>
