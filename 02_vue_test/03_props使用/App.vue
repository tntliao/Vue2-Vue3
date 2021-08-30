<template>
  <div>
    <School name="ljj" :age="18" sex="男" />
    <hr />
    <School name="???" :age="19" sex="女" />
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  components: { School },
};
</script>

<style>
</style>