<template>
  <div>
    <h3>Count当前值{{ count }}</h3>
    <input type="text" v-model="name" @keyup.enter="addPerson" />
    <ul>
      <li v-for="item in person" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    person() {
      return this.$store.state.person;
    },
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    addPerson() {
      const obj = { id: nanoid(), name: this.name };
      this.$store.commit("ADD_PERSON", obj);
      this.name = "";
    },
  },
};
</script>

<style>
</style>