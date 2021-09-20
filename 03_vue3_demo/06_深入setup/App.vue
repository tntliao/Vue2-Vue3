<template>
  <Hello @demo="sayHello" Hname="abab" Hage="9876533">
    <template v-slot:hh>
      <span>today is 9.20</span>
    </template>
  </Hello>
</template>

<script>
import Hello from "./components/Hello.vue";
export default {
  name: "App",
  components: { Hello },
  setup() {
    function sayHello(val) {
      console.log("sayHello被调用" + val);
    }
    return {
      sayHello,
    };
  },
};
</script>

<style>
</style>