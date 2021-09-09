<template>
  <div class="row">
    <!-- 展示用户列表项消息 -->
    <div
      v-show="dataList.users"
      class="card"
      v-for="item in dataList.users"
      :key="item.login"
    >
      <a :href="item.html_url" target="_blank">
        <img :src="item.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ item.login }}</p>
    </div>
    <!-- 展示欢迎词 -->
    <h2 v-show="dataList.isFirst">输入关键词搜索</h2>
    <!-- 展示搜索中 -->
    <h2 v-show="dataList.isLoading">isLoading...</h2>
    <!-- 展示错误信息 -->
    <h2 v-show="dataList.errMsg">{{ dataList.errMsg }}</h2>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      dataList: {
        isFirst: true,
        isLoading: false,
        errMsg: "",
        users: [],
      },
    };
  },
  mounted() {
    this.$bus.$on("updateListDate", (listDataObj) => {
      this.dataList = { ...this.dataList, ...listDataObj };
    });
  },
};
</script>

<style>
</style>