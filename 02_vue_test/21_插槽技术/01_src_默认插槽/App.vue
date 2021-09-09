<template>
  <div class="container">
    <Category title="食物" :listData="foods">
      <!-- 会把解析好带css样式的结构传递过去 -->
      <img src="https://s3.bmp.ovh/imgs/2021/09/6a4bce3aa92ff410.jpg" />
    </Category>
    <Category title="游戏" :listData="games">
      <ul>
        <li v-for="item in games" :key="item">{{ item }}</li>
      </ul>
    </Category>
    <Category title="电影" :listData="films">
      <video controls src="http://vjs.zencdn.net/v/oceans.mp4"></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  data() {
    return {
      foods: ["苹果", "葡萄", "橙子", "桃子"],
      games: ["王者荣耀", "奇迹暖暖", "和平精英", "超级玛丽"],
      films: ["星际穿越", "绿皮书", "楚门的世界", "控方证人"],
    };
  },
  components: {
    Category,
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-between;
}
img,
video {
  width: 100%;
}
</style>