<template>
  <div class="container">
    <Category title="食物">
      <template slot-scope="liao">
        <ul>
          <li v-for="item in liao.films" :key="item">{{ item }}</li>
        </ul>
      </template>
    </Category>
    <Category title="食物">
      <template slot-scope="liao">
        <ol>
          <li v-for="item in liao.films" :key="item">{{ item }}</li>
        </ol>
      </template>
    </Category>
    <Category title="食物">
      <template slot-scope="liao">
        <h5 v-for="item in liao.films" :key="item">{{ item }}</h5>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  components: {
    Category,
  },
};
</script>

<style>
.container,
.link {
  display: flex;
  justify-content: space-evenly;
}
img,
video {
  width: 100%;
}
h5 {
  text-align: center;
}
</style>