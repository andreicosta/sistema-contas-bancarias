<template>
  <div>
    {{ data }}
    {{ type }}
    {{ value }}
    {{ operation.type }}
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
    data: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    operation: {
      type: Object,
      required: true,
    },
  },
};
</script>
