<template>
  <div>
    <h1>名字：{{ name }}</h1>
    <h1>性别：{{ gender }}</h1>
    <button @click="onChange">更改信息</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Hello",
  setup() {
    let name = ref("ljj");
    let gender = ref("男");

    function onChange() {
      name.value = "liaojijia";
      gender.value = "男性";
    }

    return {
      name,
      gender,
      onChange,
    };
  },
};
</script>

<style>
</style>