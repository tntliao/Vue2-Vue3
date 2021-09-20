<template>
  <div>
    <h1>名字：{{ name }}</h1>
    <h1>性别：{{ gender }}</h1>
    <button @click="test">触发demo事件</button>
    <!-- <slot name="hh"></slot> -->
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Hello",
  props: ["Hname"],
  setup(props, context) {
    /*
      setup的第一个参数需要在props配置项中配置才能得到参数
      
      context 中的三个参数
        attrs 没有在props中接受，就会被这个对象收入
        emit  触发自定义事件
        slots 插槽技术
     */

    console.log(props, context.slots);
    let name = ref("ljj");
    let gender = ref("男");

    function test() {
      context.emit("demo", 45678);
    }

    return {
      name,
      gender,

      test,
    };
  },
};
</script>

<style>
</style>