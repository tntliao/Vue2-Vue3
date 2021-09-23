<template>
  <div>
    <h1>sum:{{ sum }}</h1>
    <button @click="sum++">sum++</button>
    <hr />
    <h1>{{ person }}</h1>
    <h2>name:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
    <h2>address:{{ address }}</h2>
    <hr />
    <button @click="name += '~'">修改姓名</button>
    <button @click="age -= 1">修改年龄</button>
    <button @click="address += '@'">修改地址</button>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
export default {
  name: "Hello",
  setup() {
    const sum = ref(0);
    const person = reactive({
      name: "ljj",
      age: 18,
      address: "男",
    });

    // toRef 可以将想要属性单独提取出来，且和源数据是相通的，一样是响应式的
    // const name = toRef(person, "name");

    // toRefs 可以批量提取属性
    const p = toRefs(person);
    return {
      sum,
      person,
      ...p,
    };
  },
};
</script>

<style>
</style>