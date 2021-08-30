<template>
  <div>
    <h2 @click="showName">{{ title }}</h2>
    <h3>{{ name }}</h3>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
// import { showTitle, person } from "../utils/mixin";
export default {
  data() {
    return {
      ashdashd: 99,
      title: "点我提示当前内容1",
    };
  },
  //局部混入
  // mixins: [showTitle, person],
};
</script>

<style>
</style>