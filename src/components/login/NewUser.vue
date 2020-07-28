<template>
  <form class="form-group" @submit.prevent="handleSubmit">
    <input-field
      :inputType="'text'"
      :inputName="'name'"
      :placeholder="'Nome'"
      @inputChange="handleInputChange"
    />
    <input-field
      :inputType="'email'"
      :inputName="'email'"
      :placeholder="'Email'"
      @inputChange="handleInputChange"
    />
    <input-field
      :inputType="'password'"
      :inputName="'password'"
      :placeholder="'Senha'"
      :class="{ 'is-error': !passwordMatch }"
      @inputChange="handleInputChange"
    />
    <input-field
      :inputType="'password'"
      :inputName="'passwordconfirmation'"
      :placeholder="'Confirmação de senha'"
      :class="{ 'is-error': !passwordMatch }"
      @inputChange="handleInputChange"
    />
    <button class="btn" type="button">Cancelar</button>
    <button class="btn btn-primary" type="submit">Cadastrar</button>
  </form>
</template>

<script>
import InputField from "../forms/Input";

export default {
  name: "new-user-form",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        passwordconfirmation: ""
      },
      passwordMatch: true
    };
  },
  methods: {
    handleSubmit() {
      if (this.passwordMatch) {
        console.log("Submit");
      }
    },
    handleInputChange({ name, value }) {
      this.user[name] = value;
    }
  },
  watch: {
    ["user.password"](value) {
      if (this.user.password !== this.user.passwordconfirmation) {
        this.passwordMatch = false;
        return;
      }
      this.passwordMatch = true;
    },
    ["user.passwordconfirmation"](value) {
      if (this.user.password !== this.user.passwordconfirmation) {
        this.passwordMatch = false;
        return;
      }
      this.passwordMatch = true;
    }
  },
  components: {
    InputField
  }
};
</script>

<style></style>
