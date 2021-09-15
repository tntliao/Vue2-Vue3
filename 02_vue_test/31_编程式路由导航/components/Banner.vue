<template>
  <div class="page-header">
    <h2>Vue Router Demo</h2>
    <button @click="back">back</button>
    <button @click="forward">forward</button>
    <button @click="go">go</button>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back() {
      //后退
      this.$router.back();
    },
    forward() {
      //前进
      this.$router.forward();
    },
    go() {
      //正数前进 负数后退
      this.$router.go(1);
    },
  },
};
</script>

<style>
</style>