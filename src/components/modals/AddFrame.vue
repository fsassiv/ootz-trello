<template>
  <div
    class="modal modal-sm"
    :class="{ active: $store.state.modals.addFrameIsActive }"
  >
    <a
      href="#close"
      class="modal-overlay"
      @click.prevent="handleCloseModal"
      aria-label="Close"
    ></a>
    <div class="modal-container">
      <div class="modal-header">
        <a
          href="#close"
          class="btn btn-clear float-right"
          aria-label="Close"
          @click.prevent="handleCloseModal"
        ></a>
        <h4 class="modal-title">Adionar Frame</h4>
      </div>
      <input
        class="form-input"
        type="text"
        v-model="title"
        id="todo-title"
        name="todo-title"
        placeholder="Nome do Frame"
        autofocus
        ref="title"
      />
      <div class="modal-footer">
        <button class="btn" @click="handleCloseModal">
          Cancelar
        </button>
        <button class="btn btn-primary" @click="handleAddFrame">
          Adicionar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import api from "../../../service/api";
import framesStore from "../../mixins/frames.store";
import modalsGettersTypes from "../../store/modals/getters.types";

export default {
  name: "add-frame",
  data() {
    return {
      title: ""
    };
  },
  computed: {
    ...mapGetters("modals", {
      modalState: modalsGettersTypes.getFrameState
    })
  },
  watch: {
    modalState(newValue, prevValue) {
      if (newValue) {
        this.$refs.title.focus();
      }
    }
  },
  mixins: [framesStore],
  methods: {
    handleCloseModal() {
      this.$store.commit("modals/TOGGLE_ADD_FRAME_STATE");
      this.title = "";
    },
    handleAddFrame() {
      api
        .post("/frame", {
          title: this.title,
          order: 0
        })
        .then(data => {
          this.setFramesAsync();
        })
        .catch(console.error);
      this.handleCloseModal();
    }
  }
};
</script>

<style></style>
