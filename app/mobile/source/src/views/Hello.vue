<template>
<div>
  <div v-html="t">这是一个匹配路由组件 {{ t }}</div>

  <btn :title="t"></btn>

  <count></count>
</div>
</template>

<script>
import Btn from './btn';
import Count from './count';

export default {
  components: {
    Btn,
    Count,
  },

  data() {
    return {
      t: '+ 1',
    };
  },
};
</script>