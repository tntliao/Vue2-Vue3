<template>
  <div class="app">
    <h1>App组件，{{ brand }}---{{ price }}</h1>
    <Child />
  </div>
</template>

<script>
import Child from "./components/Child.vue";
import { reactive, provide } from "vue";
export default {
  name: "App",
  components: { Child },
  setup() {
    let car = reactive({
      brand: "oooo A8",
      price: "75w",
    });

    provide("car", car);

    return {
      ...car,
    };
  },
};
</script>

<style>
.app {
  padding: 10px;
  background: gray;
}
</style>