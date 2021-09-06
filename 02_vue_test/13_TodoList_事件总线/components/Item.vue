<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @click="handleDone(todo.id)"
      />
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="removeTodo(todo)">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  methods: {
    handleDone(val) {
      this.$bus.$emit("swithcDone", val);
      // this.swithcDone(val);
    },
    removeTodo(todo) {
      if (confirm(`你确定要删除${todo.title}吗？`)) {
        // this.deleteTodo(todo.id);
        this.$bus.$emit("deleteTodo", todo.id);
      }
    },
  },
  //接受父组件传递过来的东西
  props: ["todo"],
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
  cursor: pointer;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>