<template>
  <div class="dashboard__header d-flex space-between align-items-center">
    <p>
      Bem vinda(o), <b>{{ user.name }}</b>
    </p>
    <button @click="$emit('create-frame')" class="btn btn-primary">
      Criar frame
    </button>
  </div>
</template>

<script>
export default {
  name: "dashboard-header",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>

<style></style>
