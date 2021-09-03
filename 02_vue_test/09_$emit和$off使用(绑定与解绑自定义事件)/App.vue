<template>
  <div>
    <School :showSchool="showSchool" />
    <Student @ljj="showStuden" @demo="showJia" />
    <!-- <Student ref="student" /> -->
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  components: {
    School,
    Student,
  },
  methods: {
    showSchool(val) {
      console.log("App showSchool", val);
    },
    showStuden(val) {
      console.log("App showStuden", val);
    },
    showJia() {
      console.log("App showJia");
    },
  },
  /* mounted() {
    this.$refs.student.$on("ljj", this.showStuden);
  }, */
};
</script>

<style>
</style>