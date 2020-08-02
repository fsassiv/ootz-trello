<template>
  <form class="form-group" @submit.prevent="handleSubmit">
    <h2>Cadastro</h2>
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
    <router-link to="/login" class="btn" type="button">Cancelar</router-link>
    <button class="btn btn-primary" type="submit">Cadastrar</button>
  </form>
</template>

<script>
import InputField from "../forms/Input";
import { createNewUser } from "../../../utils/user";
import methods from "../../mixins/methods";
import rootMutationsTypes from "../../store/mutations.types.js";

export default {
  name: "new-user-form",
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        passwordconfirmation: "",
      },
      passwordMatch: true,
      emailRegistered: false,
    };
  },
  mixins: [methods],
  beforeDestroy() {
    this.$store.commit(rootMutationsTypes.hideToast);
  },
  methods: {
    handleSubmit() {
      if (this.passwordMatch) {
        const response = createNewUser(this.user);
        if (response.error) {
          this.emailRegistered = true;
          this.$store.commit(rootMutationsTypes.showToast, {
            type: "error",
            message: "Email já cadastrado",
          });
          return;
        }
        this.$router.push("dashboard");
      }
    },
    validatePassword() {
      if (this.user.password !== this.user.passwordconfirmation) {
        this.passwordMatch = false;
        return;
      }
      this.passwordMatch = true;
    },
  },
  watch: {
    ["user.password"](value) {
      this.validatePassword();
    },
    ["user.passwordconfirmation"](value) {
      this.validatePassword();
    },
  },
  components: {
    InputField,
  },
};
</script>

<style></style>
