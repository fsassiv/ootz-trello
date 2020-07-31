<template>
  <draggable
    v-model="list"
    class="board"
    handle=".board-column__label"
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
        v-for="item in list"
        :key="item.title"
        :title="item.title"
        :cards="item.cards"
      />
    </transition-group>
  </draggable>
</template>

<script>
import Frame from "./Frame";
import draggable from "vuedraggable";

export default {
  name: "board",
  data() {
    return {
      list: [
        {
          title: "One",
          content: "text para One",
          cards: [
            { title: "Card One", open: true },
            { title: "Card Two", open: false }
          ]
        },
        {
          title: "Two",
          content: "text para Two",
          cards: [{ title: "Card Slipknot" }]
        },
        {
          title: "Three",
          content: "text para Three",
          cards: [{ title: "Nadine" }, { title: "Flavio" }]
        }
      ],
      drag: false,
      options: {
        dropzoneSelector: "ul",
        draggableSelector: "li"
      }
    };
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
    Frame,
    draggable
  }
};
</script>

<style>
.flip-list-move {
  transition: transform 0.25s;
}
</style>
