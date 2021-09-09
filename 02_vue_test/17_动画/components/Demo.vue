<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="liao" appear>
      <div v-show="isShow" class="anim"></div>
    </transition>
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

.liao-enter-active {
  animation: atguigu 0.5s;
}
.liao-leave-active {
  animation: atguigu 0.5s reverse;
}

@keyframes atguigu {
  from {
    transform: translateX(-300px);
  }
  to {
    transform: translateX(0px);
  }
}
</style>