<template>
  <div class="son">
    <h2>Son组件</h2>
    <button @click="isShow = true">弹个窗</button>
    <teleport v-if="isShow" to="body">
      <div class="bg">
        <div class="dialog">
          <button @click="isShow = false">关弹个窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Son",
  setup() {
    const isShow = ref(false);
    return {
      isShow,
    };
  },
};
</script>

<style>
.son {
  background: slateblue;
  padding: 10px;
}
.bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
}
.dialog {
  width: 250px;
  height: 300px;
  background: thistle;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -125px;
  margin-top: -150px;
}
</style>