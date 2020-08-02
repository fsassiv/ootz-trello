<template>
  <div class="modal modal-sm" :class="{ active: $store.state.modals.addTodoIsActive }">
    <a href="#close" class="modal-overlay" @click.prevent="handleCloseModal" aria-label="Close"></a>
    <div class="modal-container">
      <div class="modal-header">
        <a
          href="#close"
          class="btn btn-clear float-right"
          aria-label="Close"
          @click.prevent="handleCloseModal"
        ></a>
        <h4 class="modal-title">Adionar Tarefa</h4>
      </div>
      <input
        class="form-input"
        type="text"
        v-model="title"
        id="todo-name"
        name="todo-name"
        placeholder="Título da tarefa"
        ref="title"
      />
      <textarea
        class="form-input"
        name="todo-description"
        id="todo-description"
        v-model="description"
      ></textarea>
      <div class="modal-footer">
        <button class="btn" @click="handleCloseModal">Cancelar</button>
        <button class="btn btn-primary" @click="handleAddTodo">Adicionar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import framesStore from "../../mixins/frames.store";
import modalGettersTypes from "../../store/modals/getters.types";
import api from "../../../service/api";

export default {
  name: "add-todo",
  data() {
    return {
      title: "",
      description: "",
    };
  },
  computed: {
    ...mapGetters("modals", {
      addTodoTo: modalGettersTypes.addTodoTo,
    }),
  },
  watch: {
    modalState(newValue, prevValue) {
      if (newValue) {
        this.$refs.title.focus();
      }
    },
  },
  mixins: [framesStore],
  methods: {
    handleCloseModal() {
      this.$store.commit("modals/TOGGLE_ADD_TODO_STATE");
      this.title = "";
      this.description = "";
    },
    handleAddTodo() {
      api
        .post("/todo", {
          title: this.title,
          description: this.description,
          frame_id: this.addTodoTo,
          open: true,
          order: 0,
        })
        .then((data) => this.setFramesAsync())
        .catch(console.error);
      this.handleCloseModal();
    },
  },
};
</script>

<style></style>
