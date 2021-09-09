<template>
  <li>
    <label v-show="!todo.isEdit">
      <input
        type="checkbox"
        :checked="todo.done"
        @click="handleDone(todo.id)"
      />
      <span>{{ todo.title }}</span>
    </label>

    <input
      v-show="todo.isEdit"
      type="text"
      :value="todo.title"
      @blur="handleNine(todo, $event)"
      ref="inputNode"
    />
    <button class="btn btn-danger" @click="removeTodo(todo)">删除</button>
    <button class="btn btn-danger" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
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
        // this.$bus.$emit("deleteTodo", todo.id);
        pubsub.publish("deleteTodo", todo.id);
      }
    },
    handleEdit(todo) {
      if (Object.prototype.hasOwnProperty.call(todo, "isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(function () {
        this.$refs.inputNode.focus();
      });
    },
    handleNine(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("内容不能为空！！");
      this.$bus.$emit("updatedTitle", todo.id, e.target.value);
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