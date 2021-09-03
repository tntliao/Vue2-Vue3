<template>
  <div>
    <h2 @click="sName">{{ name }}</h2>
    <button @click="unbind">解绑事件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "廖家嘉",
    };
  },
  methods: {
    sName() {
      this.$emit("ljj", this.name);
      this.$emit("demo");
    },
    unbind() {
      // this.$off("ljj"); //解绑指定事件
      // this.$off(["ljj", "demo"]); //解绑多个事件
      this.$off(); //解绑全部事件
    },
  },
};
</script>

<style scoped>
h2 {
  background-color: royalblue;
  padding: 40px;
}
</style>