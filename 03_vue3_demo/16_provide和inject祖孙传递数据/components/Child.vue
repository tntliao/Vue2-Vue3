<template>
  <div class="child">
    <h2>Child组件</h2>
    <Son />
  </div>
</template>

<script>
import Son from "./Son.vue";
export default {
  name: "Child",
  components: { Son },
};
</script>

<style>
.child {
  padding: 10px;
  background: skyblue;
}
</style>