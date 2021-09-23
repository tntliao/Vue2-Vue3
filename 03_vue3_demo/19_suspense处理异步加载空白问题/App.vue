<template>
  <div class="app">
    <h2>App组件</h2>
    <suspense>
      <template v-slot:default> <Child /> </template>
      <template v-slot:fallback> 正在加载中... </template>
    </suspense>
  </div>
</template>

<script>
// import Child from "./components/Child.vue";
import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import("./components/Child.vue"));
export default {
  name: "App",
  components: { Child },
};
</script>

<style>
.app {
  background: gray;
  padding: 10px;
}
</style>