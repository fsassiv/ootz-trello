<template>
  <header class="navbar main-header">
    <div class="container">
      <section
        v-if="$route.path === '/dashboard'"
        class="navbar-section d-flex space-between"
      >
        <router-link to="/" class="navbar-brand mr-2"
          >Challenge Flávio</router-link
        >
        <a @click.prevent="handleLogout" class="btn btn-link">Sair</a>
      </section>
      <section v-else class="navbar-section">
        <router-link to="/" class="navbar-brand mr-2"
          >Challenge Flávio</router-link
        >
        <router-link to="login" class="btn btn-link">Login</router-link>
        <router-link to="sign-up" class="btn btn-link"
          >Cadastrar-se</router-link
        >
      </section>
    </div>
  </header>
</template>

<script>
import { logOut } from "../../../utils/user";

export default {
  name: "main-header",
  methods: {
    handleLogout() {
      logOut();
      this.$router.push("/");
    }
  }
};
</script>

<style></style>
