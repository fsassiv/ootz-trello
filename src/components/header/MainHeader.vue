<template>
  <header class="navbar main-header">
    <div class="container">
      <section class="navbar-section">
        <router-link to="/" class="navbar-brand mr-2">Challenge Flávio</router-link>
        <router-link to="login" class="btn btn-link">Login</router-link>
        <router-link to="sign-up" class="btn btn-link">Cadastrar-se</router-link>
      </section>
    </div>
  </header>
</template>

<script>
export default {
  name: "main-header",
};
</script>

<style>
</style>