<template>
  <div>
    <ul>
      <li v-for="item in detailList" :key="item.id">
        <!-- 携带params参数字符串写法 -->
        <!-- <router-link :to="`/about/message/detail/${item.id}/${item.title}`">
          {{ item.title }}
        </router-link> -->

        <!-- 携带params参数对象写法 -->
        <router-link
          :to="{
            name: 'xianqing',
            params: {
              id: item.id,
              title: item.title,
            },
          }"
          >{{ item.title }}</router-link
        >
        <button @click="push(item)">push</button>
        <button @click="replace(item)">replace</button>
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
  methods: {
    push(item) {
      this.$router.push({
        name: "xianqing",
        params: {
          id: item.id,
          title: item.title,
        },
      });
    },
    replace(item) {
      // name 写法
      /* this.$router.replace({
        name: "xianqing",
        params: {
          id: item.id,
          title: item.title,
        },
      }); */


      // path 写法
      const id = item.id;
      const title = item.title;
      this.$router.replace({
        /*
          detail后面的会被视为参数，需要在router path哪里配置
          例如：
            path:'/about/message/detail/:id/:title' 
         */
        
        path: `/about/message/detail/${id}/${title}`,
      });
    },
  },
};
</script>

<style>
</style>