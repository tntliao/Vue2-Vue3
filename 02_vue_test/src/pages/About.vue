<template>
  <div>
    <h2>我是About的内容</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link
          replace
          class="list-group-item"
          active-class="active"
          to="/about/news"
          >News</router-link
        >
      </li>
      <li>
        <router-link
          replace
          class="list-group-item"
          active-class="active"
          to="/about/message"
          >Message</router-link
        >
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
</style>