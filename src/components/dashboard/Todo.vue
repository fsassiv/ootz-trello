<template>
  <li class="board-todo">
    <div class="board-todo__content" :class="{ open: !todo.open }">
      <div class="board-todo__head">
        <p class="board-todo__title">{{ todo.title }}</p>
        <i @click="deleteTodo" class="icon icon-close"></i>
      </div>

      <textarea
        :disabled="!todo.open"
        @blur="updateTodo"
        v-model="todo.description"
        class="board-todo__description"
      ></textarea>
      <div class="form-group">
        <label class="form-checkbox">
          <input
            @change="updateTodo(!todo.open)"
            type="checkbox"
            :checked="!todo.open"
            :disabled="!todo.open"
          />
          <i class="form-icon"></i> Fechada?
        </label>
      </div>
    </div>
  </li>
</template>

<script>
import api from "../../../service/api";
import framesStore from "../../mixins/frames.store";

export default {
  name: "todo",
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  mixins: [framesStore],
  methods: {
    deleteTodo() {
      api
        .delete(`/todo/${this.todo.id}`)
        .then((response) => {
          this.setFramesAsync();
        })
        .catch(console.error);
    },
    updateTodo(isOpen) {
      api
        .put(`/todo`, {
          id: this.todo.id,
          title: this.todo.title,
          description: this.todo.description,
          open: typeof isOpen == "boolean" ? isOpen : this.todo.open,
          order: this.todo.order,
        })
        .then((response) => {
          this.setFramesAsync();
        })
        .catch(console.error);
    },
  },
};
</script>

<style></style>
