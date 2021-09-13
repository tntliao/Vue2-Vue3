<template>
  <div>
    <h2>我在：{{ school }}学习：{{ subject }}</h2>
    <h2>当前求和为:{{ count }}</h2>
    <h2>当前和放大10倍:{{ bigCount }}</h2>
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
import { mapState, mapGetters } from "vuex";
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
    increment() {
      // this.$store.dispatch("add", this.number);
      this.$store.commit("increment", this.number);
    },
    decrement() {
      this.$store.commit("decrement", this.number);
    },
    decrementOdd() {
      this.$store.dispatch("addOdd", this.number);
    },
    incrementWait() {
      this.$store.dispatch("oddAwit", this.number);
    },
  },
  computed: {
    /* count() {
      return this.$store.state.count;
    },
    school() {
      return this.$store.state.school;
    },
    subject() {
      return this.$store.state.subject;
    },*/

    // ...mapState({ count: "count", school: "school", subject: "subject" }),
    ...mapState(["count", "school", "subject"]),

    /* bigCount() {
      return this.$store.getters.bigCount;
    }, */
    // ...mapGetters({ bigCount: "bigCount" }),
    ...mapGetters(["bigCount"]),
  },
};
</script>

<style>
</style>