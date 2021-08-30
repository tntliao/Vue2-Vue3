<template>
  <div>
    <h1 ref="title">{{ school }}</h1>
    <h3>{{ name }}</h3>
    <h3>{{ age }}</h3>
    <h3>{{ sex }}</h3>
    <button @click="myAge++">age++</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      school: "尚硅谷",
      myAge: this.age,
    };
  },

  /*
    Vue会先解析props的数据，在会去解析data里面的数据
    但是 如果data和props中有数据是同一个名字的，Vue会使用props的值 
    传递过来的props数据，Vue是不建议修改的，可以把它复制一份到data中，props会比data中先要执行，所有不会出现拿不到数据
   */

  //简单写法
  // props: ["name", "age", "sex"],

  //类型限制
  /* props: {
    name: String,
    age: Number,
    sex: String,
  }, */

  //类型限制+必要性+默认值
  props: {
    name: {
      type: String,
      request: true,
    },
    age: {
      type: Number,
      default: 16,
    },
    sex: {
      type: String,
      request: true,
    },
  },
};
</script>

<style>
</style>