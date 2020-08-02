<template>
  <div
    class="toast"
    :class="$store.state.toastContent.type==='error'?'toast-error':'toast-primary'"
    style="width:400px;margin:auto"
  >
    <button @click="closeToast" class="btn btn-clear float-right"></button>
    {{toastContent.message}}
  </div>
</template>

<script>
import rootMutationsTypes from "../../store/mutations.types.js";

export default {
  computed: {
    toastContent() {
      return this.$store.getters.getToastContent;
    },
  },
  methods: {
    closeToast() {
      this.$store.commit(rootMutationsTypes.hideToast);
    },
  },
};
</script>

<style>
</style>