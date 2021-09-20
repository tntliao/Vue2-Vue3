<template>
  <div>
    <ul>
      <li :style="{ opacity }">hello ljj</li>
      <li>news001</li>
      <input type="text" />
      <li>news002</li>
      <input type="text" />
      <li>news003</li>
      <input type="text" />
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
      color: "red",
    };
  },
  beforeDestroy() {
    console.log("News即将被销毁");
  },
  //路由专属钩子
  activated() {
    console.log("News 激活");
    this.timer = setInterval(() => {
      this.opacity < 0 ? (this.opacity = 1) : (this.opacity -= 0.01);
    }, 20);
  },
  deactivated() {
    console.log("News 失活");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>