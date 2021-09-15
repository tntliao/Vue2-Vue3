<template>
  <div>
    <h3>Count当前值{{ count }}</h3>
    <h3>第一个名字为：{{ firstName }}</h3>
    <input type="text" v-model="name" @keyup.enter="addPerson" />
    <ul>
      <li v-for="item in person" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="addPersonWang">添加姓王的人</button>
    <button @click="addPerson2">添加随机的人</button>
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
      return this.$store.state.personAbout.person;
    },
    count() {
      return this.$store.state.countAbout.count;
    },
    firstName() {
      return this.$store.getters["personAbout/firstPersonName"];
    },
  },
  methods: {
    addPerson() {
      const obj = { id: nanoid(), name: this.name };
      this.$store.commit("personAbout/ADD_PERSON", obj);
      this.name = "";
    },
    addPersonWang() {
      console.log(this.$store);
      this.$store.dispatch("personAbout/addPersonWang", this.name);
    },
    addPerson2() {
      this.$store.dispatch("personAbout/addPerson");
    },
  },
  mounted() {
    console.log(this.$store);
  },
};
</script>

<style>
</style>