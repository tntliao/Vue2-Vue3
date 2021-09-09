<template>
  <div>
    <button @click="isShow = !isShow">离开/进入</button>
    <!-- 多个动画 -->
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__rubberBand"
      leave-active-class="animate__fadeOutTopLeft"
    >
      <div v-show="!isShow" key="1" class="anim">
        <h2>你好啊</h2>
      </div>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
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
</style>