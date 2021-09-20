<template>
  <div>
    <h1>名字：{{ name }}</h1>
    <h1>性别：{{ gender }}</h1>
    <h2>升高：{{ person.rise }}</h2>
    <h2>体重：{{ person.weight }}</h2>
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

    const person = ref({
      rise: "166",
      weight: "48kg",
    });

    function onChange() {
      /* name.value = "liaojijia";
      gender.value = "男性"; */

      person.value.rise = "167";
      person.value.weight = "48.5kg";
    }

    return {
      name,
      gender,
      person,

      onChange,
    };
  },
};
</script>

<style>
</style>