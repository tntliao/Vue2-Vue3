<template>
  <div>
    <h1>App组件</h1>
  </div>
</template>

<script>
import {
  reactive,
  readonly,
  ref,
  isRef,
  isReactive,
  isProxy,
  isReadonly,
} from "vue";
export default {
  name: "App",
  setup() {
    let sum = ref(0);
    let person = reactive({
      name: "ljj",
      age: 18,
    });
    let p = readonly(sum);

    console.log(isRef(sum));
    console.log(isReactive(person));
    console.log(isProxy(sum));
    console.log(isReadonly(p));
  },
};
</script>

<style>
</style>