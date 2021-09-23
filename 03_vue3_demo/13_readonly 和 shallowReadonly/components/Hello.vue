<template>
  <div>
    <h1>age:{{ age }}</h1>
    <button @click="age++">sum++</button>
    <hr />
    <h1>height:{{ height.value }}</h1>
    <button @click="height.value++">height++</button>
    <h2>jeck name :{{ height.jeck.age }}</h2>
    <button @click="height.jeck.age++">height++</button>
  </div>
</template>

<script>
import { ref, reactive, readonly, shallowReadonly } from "vue";
export default {
  name: "Hello",
  setup() {
    const age = ref(18);

    let height = reactive({
      value: 167,
      jeck: {
        age: 77777,
      },
    });

    // 不允许改动数据(深层次)
    // height = readonly(height);

    // 浅层次
    height = shallowReadonly(height);

    return {
      age,
      height,
    };
  },
};
</script>

<style>
</style>