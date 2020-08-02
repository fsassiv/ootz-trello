<template>
  <form class="form-group" @submit.prevent="handleSubmit">
    <h2>Entrar</h2>
    <input-field
      :inputType="'email'"
      :inputName="'email'"
      :placeholder="'Email'"
      :required="true"
      @inputChange="handleInputChange"
    />
    <input-field
      :inputType="'password'"
      :inputName="'password'"
      :placeholder="'Senha'"
      :required="true"
      @inputChange="handleInputChange"
    />
    <router-link to="sign-up" class="btn" type="button">Criar novo usuário</router-link>
    <button class="btn btn-primary" type="submit">Logar</button>
  </form>
</template>

<script>
import InputField from "../forms/Input";
import { logUser } from "../../../utils/user";
import methods from "../../mixins/methods";
import rootMutationsTypes from "../../store/mutations.types.js";

export default {
  name: "log-user",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  mixins: [methods],
  beforeDestroy() {
    this.$store.commit(rootMutationsTypes.hideToast);
  },
  methods: {
    handleSubmit() {
      const response = logUser(this.user);

      if (response.error) {
        this.$store.commit(rootMutationsTypes.showToast, {
          type: "error",
          message: response.error,
        });
        return;
      }
      this.$router.push("/dashboard");
    },
  },
  components: {
    InputField,
  },
};
</script>

<style>
</style>