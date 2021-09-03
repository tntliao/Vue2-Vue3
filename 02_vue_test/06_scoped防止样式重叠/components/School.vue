<template>
  <div>
    <h2>{{ school }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      school: "尚硅谷",
    };
  },
};
</script>

<style scoped>
h2 {
  color: rgb(255, 0, 85);
}
</style>