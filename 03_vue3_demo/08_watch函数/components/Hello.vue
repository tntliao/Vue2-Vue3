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
import { reactive, ref, watch } from "vue";
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

    // 情况一：监视ref所定义的一个响应式数据
    /* watch(
      sum,
      (newVal, oldVal) => {
        console.log(newVal, oldVal);
      },
      { immediate: true }
    ); */

    // 情况二：监视ref所定义的多个响应式数据
    /* watch([sum, name], (newVal, oldVal) => {
      console.log(newVal, oldVal);
    }); */

    /* 
      情况三：监视reactive所定义的一个响应式数据的全部属性
        1.注意：此处无法正确获取oldValue
        2.注意：强制开启了深度监视（deep无效）    
     */
    /* watch(
      person,
      (newValue, oldValue) => {
        console.log("person变化了", newValue, oldValue);
      },
      { deep: false } //此处关闭了深度监视是无效的
    ); */

    // 情况四：监视reactive所定义的一个响应式数据中的某个属性
    /* watch(
      () => person.age,
      (newValue, oldValue) => {
        console.log("person中的age发生变化了", newValue, oldValue);
      }
    ); */

    // 情况五：监视reactive所定义的一个响应式数据中的某些属性
    watch([() => person.name, () => person.age], (newValue, oldValue) => {
      console.log("perosn中的age或name发生变化了", newValue, oldValue);
    });

    // 特殊情况
    watch(
      () => person.hobby,
      (oldValue, newValue) => {
        console.log("hobby发生变化了", oldValue, newValue);
      },
      { deep: true }
    );
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