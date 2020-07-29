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
  methods: {
    handleSubmit() {
      const response = logUser(this.user);

      if (response.error) {
        //display toast
        return;
      }
      this.$router.push("/dashboard");
    },
    handleInputChange({ name, value }) {
      this.user[name] = value;
    },
  },
  components: {
    InputField,
  },
};
</script>

<style>
</style>