<template>
  <div>
    <h1>sum:{{ sum }}</h1>
    <button @click="sum++">sum++</button>
    <hr />
    <h1>name:{{ name }}</h1>
    <button @click="name += '!'">name++</button>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "Hello",
  setup() {
    const sum = ref(0);
    const name = ref("ljj");

    // 监视一个
    /* watch(
      sum,
      (newVal, oldVal) => {
        console.log(newVal, oldVal);
      },
      { immediate: true }
    ); */

    // 监视多个
    watch([sum, name], (newVal, oldVal) => {
      console.log(newVal, oldVal);
    });

    return {
      sum,
      name,
    };
  },
};
</script>

<style>
</style>