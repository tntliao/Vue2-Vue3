<template>
  <div>
    性：<input type="text" v-model="person.firstName" /><br />
    名：<input type="text" v-model="person.lastName" /><br />
    全名：<span>{{ person.fullName }}</span><br />
    <input type="text" v-model="person.fullName" />
  </div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "Hello",
  setup() {
    const person = reactive({
      firstName: "张",
      lastName: "三",
    });

    // 简写方式 只能读取
    /* person.fullName = computed(() => {
      return person.firstName + "-" + person.lastName;
    }); */

    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(val) {
        const nameArr = val.split("-");
        console.log(nameArr);
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });

    return {
      person,
    };
  },
};
</script>

<style>
</style>