<template>
  <div>
    <h1>sum:{{ sum }}</h1>
    <button @click="sum++">sum++</button>
    <hr />
    <h2>鼠标点击的x：{{ point.x }}</h2>
    <h2>鼠标点击的y：{{ point.y }}</h2>
  </div>
</template>

<script>
import savePoint from "../hooks/usePoint";
import { ref } from "vue";
export default {
  name: "Hello",
  setup() {
    const sum = ref(0);
    const name = ref("ljj");

    const point = savePoint();

    return {
      sum,
      name,
      point,
    };
  },
};
</script>

<style>
</style>