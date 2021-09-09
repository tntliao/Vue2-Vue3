<template>
  <div>
    <button @click="isShow = !isShow">离开/进入</button>
    <!-- 多个动画 -->
    <transition-group appear>
      <div v-show="!isShow" key="1" class="anim">
        <h2>你好</h2>
      </div>
      <div v-show="isShow" key="2" class="anim">
        <h2>尚硅谷</h2>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
.anim {
  width: 300px;
  height: 40px;
  background-color: pink;
}
/* 进入的起点，离开的终点 */
.v-enter,
.v-leave-to {
  transform: translateX(-300px);
}
/* 进入的终点，离开的起点 */
.v-enter-to,
.v-leave {
  transform: translateX(0px);
}
.v-enter-active {
  transition: 0.5s linear;
}
.v-leave-active {
  transition: 0.5s linear;
}
</style>