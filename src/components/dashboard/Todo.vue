<template>
  <li class="board-todo">
    <div class="board-todo__content" :class="{ open: !data.open }">
      {{ data.title }}
    </div>
  </li>
</template>

<script>
export default {
  name: "todo",
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style></style>
