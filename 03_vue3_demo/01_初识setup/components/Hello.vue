<template>
  <div>
    <h1>名字：{{ name }}</h1>
    <h1>性别：{{ gender }}</h1>
    <button @click="showInfo">弹窗信息</button>
  </div>
</template>

<script>
export default {
  name: "Hello",
  setup() {
    let name = "ljj";
    let gender = "男";

    function showInfo() {
      alert(`姓名：${name}，性别：${gender}`);
    }

    return {
      name,
      gender,
      showInfo,
    };
  },
};
</script>

<style>
</style>