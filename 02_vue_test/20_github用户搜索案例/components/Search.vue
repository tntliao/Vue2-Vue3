<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="userName"
      />&nbsp;
      <button @click="searchUser">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    searchUser() {
      this.$bus.$emit("updateListDate", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      axios.get(`https://api.github.com/search/users?q=${this.userName}`).then(
        (response) => {
          const users = response.data.items;
          this.$bus.$emit("updateListDate", { isLoading: false, users });
        },
        (error) => {
          this.$bus.$emit("updateListDate", {
            isLoading: false,
            errMsg: error.message,
            users: [],
          });
        }
      );
    },
  },
};
</script>

<style>
</style>