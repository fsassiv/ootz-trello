<template>
  <draggable
    v-model="list"
    class="board"
    handle=".board-column__label"
    v-bind="dragOptions"
    @start="drag = true"
    @end="drag = false"
    :="dragOptions"
  >
    <transition-group
      style="display:flex;align-items:flex-start"
      type="transition"
      :name="!drag ? 'flip-list' : null"
    >
      <board-column :onDrag="drag" v-for="item in list" :key="item.title" :title="item.title">
        <draggable class="board-column__content" tag="ul" v-model="item.cards" :="dragOptions">
          <board-card v-for="card in item.cards" :key="card.title" :data="card" />
        </draggable>
      </board-column>
    </transition-group>
  </draggable>
</template>

<script>
import BoardColumn from "./Column";
import BoardCard from "./Card";
import draggable from "vuedraggable";

export default {
  name: "board",
  data() {
    return {
      list: [
        {
          title: "One",
          content: "text para One",
          cards: [{ title: "Card One" }, { title: "Card Two" }],
        },
        {
          title: "Two",
          content: "text para Two",
          cards: [{ title: "Card Slipknot" }],
        },
        {
          title: "Three",
          content: "text para Three",
          cards: [{ title: "Nadine" }, { title: "Flavio" }],
        },
      ],
      drag: false,
      options: {
        dropzoneSelector: "ul",
        draggableSelector: "li",
      },
    };
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
  components: {
    BoardColumn,
    BoardCard,
    draggable,
  },
};
</script>

<style>
.flip-list-move {
  transition: transform 0.25s;
}
</style>
