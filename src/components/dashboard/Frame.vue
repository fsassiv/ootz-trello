<template>
  <div class="board-frame" :class="{ ondrag: onDrag }">
    <div class="board-frame__head">
      <h5 class="board-frame__label">{{ title }}</h5>
      <pop-over />
    </div>
    <draggable
      tag="ul"
      class="board-frame__content"
      v-model="cards"
      v-bind="dragOptions"
    >
      <todo v-for="card in cards" :key="card.title" :data="card" />
    </draggable>
    <button class="board-frame__add-frame-btn">
      <i class="icon icon-plus"></i>
      Adicionar Todo
    </button>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Todo from "./Todo";
import PopOver from "./PopOver";

export default {
  name: "frame",
  props: {
    title: {
      type: String,
      required: true
    },
    cards: {
      type: Array,
      required: true
    },
    onDrag: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  components: {
    PopOver,
    Todo,
    draggable
  }
};
</script>

<style></style>
