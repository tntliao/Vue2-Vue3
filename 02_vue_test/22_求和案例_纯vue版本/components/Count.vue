<template>
  <div>
    <h2>当前求和为:{{ count }}</h2>
    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option></select
    >&nbsp; <button @click="increment">增加</button>&nbsp;
    <button @click="decrement">减少</button>&nbsp;
    <button @click="decrementOdd">奇数增加</button>&nbsp;
    <button @click="incrementWait">等一下在加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      number: 1,
    };
  },
  methods: {
    increment() {
      this.count += this.number;
    },
    decrement() {
      this.count -= this.number;
    },
    decrementOdd() {
      if (this.count % 2) {
        this.count += this.number;
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.count + this.number;
      }, 500);
    },
  },
};
</script>

<style>
</style>