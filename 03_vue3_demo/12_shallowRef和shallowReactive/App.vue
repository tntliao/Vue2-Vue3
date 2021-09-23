<template>
  <button @click="isShow = !isShow">显示/隐藏</button><br />
  <Hello v-if="isShow" />
</template>

<script>
import Hello from "./components/Hello.vue";
import { ref } from "vue";
export default {
  name: "App",
  components: { Hello },
  setup() {
    const isShow = ref(true);

    return { isShow };
  },
};
</script>

<style>
</style>