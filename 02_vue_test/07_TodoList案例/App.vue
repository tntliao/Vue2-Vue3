<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addDate="addDate" />
      <List :todos="todos" :swithcDone="swithcDone" :deleteTodo="deleteTodo" />
      <Footer
        :todos="todos"
        :setTodoDone="setTodoDone"
        :clearDone="clearDone"
      />
    </div>
  </div>
</template>

<script>
import Header from "./components/MyHeader.vue";
import List from "./components/MyList.vue";
import Footer from "./components/MyFooter.vue";
export default {
  data() {
    return {
      todos: [
        { id: "001", title: "吃饭", done: true },
        { id: "002", title: "学习", done: false },
        { id: "003", title: "睡觉", done: false },
      ],
    };
  },
  methods: {
    addDate(todoObj) {
      this.todos.unshift(todoObj);
    },
    swithcDone(val) {
      this.todos.forEach((item) => {
        if (item.id === val) {
          item.done = !item.done;
        }
      });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((item) => item.id !== id);
    },
    setTodoDone(val) {
      this.todos.forEach((item) => {
        item.done = val;
      });
    },
    clearDone() {
      this.todos = this.todos.filter((item) => {
        return !item.done;
      });
    },
  },
  components: { Header, List, Footer },
};
</script>

<style scoped>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>