<template>
  <h2 @click="showSchool(school)">{{ school }}</h2>
</template>

<script>
export default {
  data() {
    return {
      school: "尚硅谷",
    };
  },
  props: ["showSchool"],
};
</script>
<style scoped>
h2 {
  padding: 40px;
  background-color: rosybrown;
}
</style>