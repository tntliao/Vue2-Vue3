<template>
  <div>
    <h2>学员：{{ name }}</h2>
    <button @click="sendSchoolName">发送name到School组件</button>
  </div>
</template>

<script>
import pubusb from "pubsub-js";
export default {
  data() {
    return {
      name: "廖家嘉",
    };
  },
  methods: {
    sendSchoolName() {
      console.log("sendSchoolName()");
      pubusb.publish("hello", this.name);
    },
  },
};
</script>

<style scoped>
h2 {
  color: pink;
}
</style>