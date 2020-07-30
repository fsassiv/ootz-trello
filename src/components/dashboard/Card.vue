<template>
  <li class="board-card">
    <div class="board-card__content">{{data.title}}</div>
  </li>
</template>

<script>
export default {
  name: "card",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
