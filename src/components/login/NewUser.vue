<template>
  <form class="form-group" @submit.prevent="handleSubmit">
    <input-field
      :inputType="'text'"
      :inputName="'name'"
      :placeholder="'Nome'"
      :required="true"
      @inputChange="handleInputChange"
    />
    <input-field
      :inputType="'email'"
      :inputName="'email'"
      :placeholder="'Email'"
      :required="true"
      :class="{ 'is-error': emailRegistered }"
      @inputChange="handleInputChange"
    />
    <input-field
      :inputType="'password'"
      :inputName="'password'"
      :placeholder="'Senha'"
      :required="true"
      :class="{ 'is-error': !passwordMatch }"
      @inputChange="handleInputChange"
    />
    <input-field
      :inputType="'password'"
      :inputName="'passwordconfirmation'"
      :placeholder="'Confirmação de senha'"
      :required="true"
      :class="{ 'is-error': !passwordMatch }"
      @inputChange="handleInputChange"
    />
    <button class="btn" type="button">Cancelar</button>
    <button class="btn btn-primary" type="submit">Cadastrar</button>
  </form>
</template>

<script>
import InputField from "../forms/Input";
import { createNewUser } from "../../../utils/user";

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
      passwordMatch: true,
      emailRegistered: false
    };
  },
  methods: {
    handleSubmit() {
      if (this.passwordMatch) {
        const response = createNewUser(this.user);
        if (response.error) {
          this.emailRegistered = true;
          return;
        }
        this.$router.push("dashboard");
      }
    },
    handleInputChange({ name, value }) {
      this.user[name] = value;
    },
    validatePassword() {
      if (this.user.password !== this.user.passwordconfirmation) {
        this.passwordMatch = false;
        return;
      }
      this.passwordMatch = true;
    }
  },
  watch: {
    ["user.password"](value) {
      this.validatePassword();
    },
    ["user.passwordconfirmation"](value) {
      this.validatePassword();
    }
  },
  components: {
    InputField
  }
};
</script>

<style></style>
