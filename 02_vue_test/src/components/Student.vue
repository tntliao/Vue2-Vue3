<template>
  <div>
    <h3>学员：{{ name }}</h3>
    <h3>{{ hobby | MySplice }}</h3>
    <h3>{{ x + y }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "廖家嘉",
      hobby: "学习-听歌-运动-游戏-睡觉-颓废",
    };
  },
};
</script>

<style>
</style>