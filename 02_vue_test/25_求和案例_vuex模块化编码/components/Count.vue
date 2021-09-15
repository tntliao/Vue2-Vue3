<template>
  <div>
    <h2>我在：{{ school }}学习：{{ subject }}</h2>
    <h2>当前求和为:{{ count }}</h2>
    <h2>当前和放大10倍:{{ bigCount }}</h2>
    <h3 style="color: red">Person组件的人数{{ person.length }}</h3>
    <select v-model.number="number">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option></select
    >&nbsp; <button @click="INCREMENT(number)">增加</button>&nbsp;
    <button @click="INCREMENT(number)">减少</button>&nbsp;
    <button @click="decrementOdd(number)">奇数增加</button>&nbsp;
    <button @click="incrementWait(number)">等一下在加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      number: 1,
    };
  },
  /* mounted() {
    console.log(this);
  }, */
  methods: {
    ...mapMutations("countAbout", ["INCREMENT", "INCREMENT"]),

    ...mapActions("countAbout", {
      decrementOdd: "addOdd",
      incrementWait: "oddAwit",
    }),
  },
  computed: {
    ...mapState("countAbout", ["count", "school", "subject"]),
    ...mapState("personAbout", ["person"]),

    ...mapGetters("countAbout", ["bigCount"]),
  },
};
</script>

<style>
</style>