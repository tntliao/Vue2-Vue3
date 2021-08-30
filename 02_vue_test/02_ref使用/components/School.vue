<template>
  <div>
    <h1 ref="title">{{ school }}</h1>
    <button @click="getTitle">获取title内容</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      school: "尚硅谷",
    };
  },
  methods: {
    getTitle() {
      console.log(this.$refs.title);
    },
  },
};
</script>

<style>
</style>