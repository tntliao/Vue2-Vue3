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
      title: "点我提示当前内容2",
    };
  },
  // mixins: [showTitle, person],
};
</script>

<style>
</style>