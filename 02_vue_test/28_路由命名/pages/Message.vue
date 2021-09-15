<template>
  <div>
    <ul>
      <li v-for="item in detailList" :key="item.id">
        <!-- 携带query参数字符串写法 -->
        <!-- <router-link
          :to="`/about/message/detail?id=${item.id}&title=${item.title}`"
        >
          {{ item.title }}
        </router-link> -->

        <!-- 携带query参数对象写法 -->
        <router-link
          :to="{
            name: 'xianqing',
            query: {
              id: item.id,
              title: item.title,
            },
          }"
          >{{ item.title }}</router-link
        >
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      detailList: [
        { id: "001", title: "message01" },
        { id: "002", title: "message02" },
        { id: "003", title: "message03" },
      ],
    };
  },
};
</script>

<style>
</style>