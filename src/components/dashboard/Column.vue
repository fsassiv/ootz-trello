<template>
  <div class="board-column" :class="{ondrag:onDrag}">
    <div class="board-column__head">
      <h5 class="board-column__label">{{title }}</h5>
      <pop-over />
    </div>
    <!-- <ul class="board-column__content"> -->
    <slot></slot>
    <!-- </ul> -->
    <button class="board-column__add-column-btn">
      <i class="icon icon-plus"></i>
      Adicionar novo Card
    </button>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import PopOver from "./PopOver";

export default {
  name: "board-column",
  props: {
    title: {
      type: String,
      required: true,
    },
    onDrag: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    PopOver,
    draggable,
  },
};
</script>

<style></style>
