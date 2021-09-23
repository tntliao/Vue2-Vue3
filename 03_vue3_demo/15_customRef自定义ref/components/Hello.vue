<template>
  <input type="text" v-model="liao" />
  <br />
  <span>{{ liao }}</span>
</template>

<script>
import { customRef } from "@vue/reactivity";
export default {
  name: "Hello",
  setup() {
    function myRef(value, delay = 300) {
      let timer;
      return customRef((track, trigger) => {
        return {
          get() {
            track();
            return value;
          },
          set(newValue) {
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger();
            }, delay);
          },
        };
      });
    }
    let liao = myRef("hh", 2000);

    return { liao };
  },
};
</script>

<style>
</style>