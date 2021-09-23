<template>
  <div>
    <h1>sum:{{ sum }}</h1>
    <button @click="sum++">sum++</button>
    <hr />
    <h1>name:{{ name }}</h1>
    <button @click="name += '!'">name++</button>
    <hr />
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>爱好：{{ person.hobby.play.name }}</h2>
    <button @click="person.name += '!'">修改名字</button>
    <button @click="person.age -= 1">修改年龄</button>
    <button @click="person.hobby.play.name += '*'">修改爱好</button>
  </div>
</template>

<script>
import { reactive, ref, watchEffect } from "vue";
export default {
  name: "Hello",
  setup() {
    const sum = ref(0);
    const name = ref("ljj");

    const person = reactive({
      name: "ljj",
      age: 18,
      hobby: {
        play: {
          name: "羽毛球",
        },
      },
    });

    // 在watchEffect中引用的数据发生变化就会被监视到
    watchEffect(() => {
      const x1 = sum.value;
      const x2 = person.age;
      console.log(x1, x2);
      console.log("watchEffect函数执行了");
    });

    return {
      sum,
      name,
      person,
    };
  },
};
</script>

<style>
</style>