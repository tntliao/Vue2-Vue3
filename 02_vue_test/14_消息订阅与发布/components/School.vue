<template>
  <div>
    <h2>{{ school }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  data() {
    return {
      school: "尚硅谷",
    };
  },
  methods: {
    demo(msgName, data) {
      console.log("publish()", data);
    },
  },
  mounted() {
    pubsub.subscribe("hello", (msgName, data) => {
      console.log(msgName, data);
    });
  },
};
</script>

<style scoped>
h2 {
  color: rgb(255, 0, 85);
}
</style>