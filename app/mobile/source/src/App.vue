<template>
  <div class="container" id="container">
    <div @click="doSomeThing">{{ content }}</div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      res: {},
      content: 'Hello World',
    };
  },

  methods: {
    doSomeThing() {
      this.content = this.content.split('').reverse().join('');

      return this.$http.get('core/....');
    },

    test() {

    },
  },
};
</script>
