<template>
  <input
    class="form-input"
    :type="inputType"
    :required="isRequired"
    :name="inputName"
    :id="inputName"
    :placeholder="placeholder"
    @keyup="$emit('inputChange', $event.target)"
  />
</template>

<script>
export default {
  props: {
    inputType: {
      type: String,
      required: true
    },
    inputName: {
      type: String,
      required: true
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      required: true
    }
  }
};
</script>
