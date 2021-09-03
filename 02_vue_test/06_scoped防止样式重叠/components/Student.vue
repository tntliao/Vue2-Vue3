<template>
  <div>
    <h2>学员：{{ name }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "廖家嘉",
    };
  },
};
</script>

<style scoped>
h2 {
  color: pink;
}
</style>