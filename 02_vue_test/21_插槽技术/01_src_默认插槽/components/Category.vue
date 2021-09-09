<template>
  <div class="item">
    <h4>{{ title }}</h4>
    <slot> </slot>
  </div>
</template>

<script>
export default {
  props: ["title", "listData"],
};
</script>

<style>
.item {
  width: 150px;
  height: 220px;
  background-color: pink;
}

h4 {
  background-color: plum;
  text-align: center;
}
</style>