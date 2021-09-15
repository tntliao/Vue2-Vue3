<template>
  <div>
    <Count />
    <hr />
    <Person />
  </div>
</template>

<script>
import Count from "./components/Count.vue";
import Person from "./components/Persons.vue";
export default {
  components: { Count, Person },
};
</script>

<style>
</style>