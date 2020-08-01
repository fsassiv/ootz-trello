<template>
  <div class="board-frame" :class="{ ondrag: onDrag }" :id="frame.id">
    <div class="board-frame__head">
      <h5 class="board-frame__label">{{ frame.title }}</h5>
      <button class="btn tooltip" data-tooltip="Excluir Frame" @click="handleDeleteFrame">
        <i class="icon icon-close"></i>
      </button>
    </div>
    <draggable
      tag="ul"
      class="board-frame__content"
      v-bind="dragOptions"
      @add="onAdd"
      @sort="onSort"
    >
      <todo :id="todo.id" v-for="todo in todos" :key="todo.id" :todo="todo" />
    </draggable>
    <button
      class="board-frame__add-frame-btn"
      @click="$store.commit('modals/TOGGLE_ADD_TODO_STATE', frame.id)"
    >
      <i class="icon icon-plus"></i>
      Adicionar Tarafa
    </button>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Todo from "./Todo";
import api from "../../../service/api";
import framesStore from "../../mixins/frames.store";

export default {
  name: "frame",
  props: {
    todos: {
      type: Array,
      required: true,
    },
    frame: {
      type: Object,
      required: true,
    },
    onDrag: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
  mixins: [framesStore],
  methods: {
    handleDeleteFrame() {
      api
        .delete(`/frame/${this.frame.id}`)
        .then(() => {
          this.setFramesAsync();
        })
        .catch(console.error);
    },
    onAdd(todo) {
      api
        .get(`/todo/${todo.item.id}`)
        .then(({ data }) => {
          this.handleAddTodo(data.data);
        })
        .catch(console.error);
    },
    onSort(e) {
      // console.log(e);
    },
    handleAddTodo(todo) {
      const { id, ...rest } = todo;
      api
        .post("/todo", {
          ...rest,
          frame_id: this.frame.id,
        })
        .then(() => this.deleteTodo(id))
        .catch(console.error);
    },
    deleteTodo(todoId) {
      api
        .delete(`/todo/${todoId}`)
        .then((response) => {
          this.setFramesAsync();
        })
        .catch(console.error);
    },
  },
  components: {
    Todo,
    draggable,
  },
};
</script>

<style></style>
