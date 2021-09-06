<template>
  <div>
    <h2>学员：{{ name }}</h2>
    <button @click="sendStudentName">把学生名字给School组件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "廖家嘉",
    };
  },
  methods: {
    sendStudentName() {
      this.$bus.$emit("hello", this.name);
    },
  },
};
</script>

<style scoped>
h2 {
  color: pink;
}
</style>