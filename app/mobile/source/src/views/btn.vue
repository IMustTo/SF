<template>
<button @click="addNum({ num: 1 })">{{ title }}</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    title: {
      type: String,
      default: '这是一个按钮',
    },
  },

  methods: {
    ...mapActions(['addNum']),

  },
};
</script>