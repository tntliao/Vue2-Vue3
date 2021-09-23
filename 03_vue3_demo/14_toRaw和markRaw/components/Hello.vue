<template>
  <div>
    <h1>age:{{ age }}</h1>
    <button @click="age++">sum++</button>
    <hr />
    <h1>height:{{ height.value }}</h1>
    <button @click="height.value++">height++</button>
    <h2>jeck name :{{ height.jeck.age }}</h2>
    <button @click="height.jeck.age++">height++</button>
    <hr />
    <h2>汽车信息：{{ card }}</h2>
    <button @click="showInfo">输出信息</button>
    <button @click="addKilometers">添加公里数</button>
    <button @click="changePrice">更改价格</button>
    <button @click="changeName">更改信息</button>
    <button @click="incrementKilometers">添加公里数</button>
  </div>
</template>

<script>
import { ref, reactive, shallowReadonly, toRaw, markRaw } from "vue";
export default {
  name: "Hello",
  setup() {
    const age = ref(18);

    let height = reactive({
      value: 167,
      jeck: {
        age: 77777,
      },
    });

    height = shallowReadonly(height);

    let card = reactive({
      brand: "oooo A6",
      price: 48,
    });

    function showInfo() {
      const p = toRaw(card);
      console.log(p);
    }

    function addKilometers() {
      const kilometers = { val: 17189, age: 2.5 };
      // 直接添加就是响应式的
      // card.kilometers = kilometers;

      // 通过markRaw函数 括起来就是标识不会 在成为响应式对象
      card.kilometers = markRaw(kilometers);
    }

    function changePrice() {
      card.price = "72";
    }

    function changeName() {
      card.brand = "oooo A8";
    }

    function incrementKilometers() {
      card.kilometers.val += 100;
      console.log(card.kilometers);
    }

    return {
      age,
      height,
      card,

      showInfo,
      addKilometers,
      changePrice,
      changeName,
      incrementKilometers,
    };
  },
};
</script>

<style>
</style>