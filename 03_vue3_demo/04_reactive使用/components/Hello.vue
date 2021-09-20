<template>
  <div>
    <h1>名字：{{ name }}</h1>
    <h1>性别：{{ gender }}</h1>
    <h2>升高：{{ person.rise }}</h2>
    <h2>体重：{{ person.weight }}</h2>
    <h2>爱好: {{ hobby }}</h2>
    <button @click="onChange">更改信息</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "Hello",
  setup() {
    let name = ref("ljj");
    let gender = ref("男");

    const person = reactive({
      rise: "166",
      weight: "48kg",
    });

    const hobby = ["学习", "睡觉", "偷懒"];

    function onChange() {
      /* name.value = "liaojijia";
      gender.value = "男性"; */

      person.rise = "167";
      person.weight = "48.5kg";

      hobby[2] = "运动";
    }

    return {
      name,
      gender,
      person,
      hobby,

      onChange,
    };
  },
};
</script>

<style>
</style>