export default {
  methods: {
    handleInputChange({ name, value }) {
      this.user[name] = value;
    }
  }
};
