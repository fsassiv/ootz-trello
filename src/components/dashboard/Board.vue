<template>
  <div class="board__no-frames" v-if="frames.length === 0">
    <h1>Não há quadros cadastros.</h1>
    <button
      class="btn btn-primary"
      @click="$store.commit('modals/TOGGLE_ADD_FRAME_STATE')"
    >Criar frame</button>
  </div>
  <draggable
    v-else
    v-model="frames"
    class="board"
    handle=".board-frame__label"
    @start="drag = true"
    @end="drag = false"
  >
    <transition-group
      style="display:flex;align-items:flex-start"
      type="transition"
      :name="!drag ? 'flip-list' : null"
    >
      <Frame
        :onDrag="drag"
        v-for="frame in frames"
        :key="frame.id"
        :frame="frame"
        :todos="frame.todos"
      />
    </transition-group>
  </draggable>
</template>

<script>
import { mapGetters } from "vuex";
import framesGettersTypes from "../../store/frames/getters.types";
import framesStore from "../../mixins/frames.store";
import Frame from "./Frame";
import draggable from "vuedraggable";

export default {
  name: "board",
  data() {
    return {
      drag: false,
      options: {
        dropzoneSelector: "ul",
        draggableSelector: "li",
      },
    };
  },
  mounted() {
    this.setFramesAsync();
  },
  mixins: [framesStore],
  computed: {
    ...mapGetters("frames", {
      frames: framesGettersTypes.getFrames,
    }),
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
  components: {
    Frame,
    draggable,
  },
};
</script>

<style>
.flip-list-move {
  transition: transform 0.25s;
}
</style>
