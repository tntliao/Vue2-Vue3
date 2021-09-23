<template>
  <div class="son">
    <h2>Son组件:{{ brand }}---{{ price }}</h2>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "Son",
  setup() {
    const car = inject("car");

    return {
      ...car,
    };
  },
};
</script>

<style>
.son {
  padding: 10px;
  background: yellowgreen;
}
</style>