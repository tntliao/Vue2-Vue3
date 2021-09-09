<template>
  <div class="container">
    <Category title="食物" :listData="foods">
      <!-- 会把解析好带css样式的结构传递过去 -->
      <img
        slot="center"
        src="https://s3.bmp.ovh/imgs/2021/09/6a4bce3aa92ff410.jpg"
      />
      <a class="foods" slot="footer" href="http:www.baidu.com">更多美食</a>
    </Category>
    <Category title="游戏" :listData="games">
      <ul slot="center">
        <li v-for="item in games" :key="item">{{ item }}</li>
      </ul>
      <div class="link" slot="footer">
        <a href="http://www.baidu.com">单机游戏</a>
        <a href="http://www.baidu.com">联机游戏</a>
      </div>
    </Category>
    <Category title="电影" :listData="films">
      <video
        slot="center"
        controls
        src="http://vjs.zencdn.net/v/oceans.mp4"
      ></video>
      <template v-slot:footer>
        <div class="link" slot="footer">
          <a href="http://www.baidu.com">单机游戏</a>
          <a href="http://www.baidu.com">联机游戏</a>
        </div>
        <h5>欢迎前来观影</h5>
      </template>
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