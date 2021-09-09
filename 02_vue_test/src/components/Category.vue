<template>
  <div class="item">
    <h4>{{ title }}</h4>
    <slot :films="films"></slot>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      films: ["星际穿越", "绿皮书", "楚门的世界", "控方证人"],
    };
  },
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