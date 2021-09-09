<template>
  <div>
    <button @click="getPerson">向5000端口发送请求</button>
    <button @click="getCars">向5001端口发送请求</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    getPerson() {
      axios
        .get("http://localhost:8080/api1/students")
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          error.message;
        });
    },
    getCars() {
      axios
        .get("http://localhost:8080/api2/cars")
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          error.message;
        });
    },
  },
};
</script>

<style>
</style>