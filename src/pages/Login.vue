<template>
  <div class="login">
    <main-header />
    <div class="login-content">
      <div class="columns">
        <div class="column col-4 col-sm-8 col-mx-auto">
          <login-form v-if="$route.path==='/' || $route.path==='/login'" />
          <new-user-form v-if="$route.path==='/sign-up'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/login/Login.vue";
import NewUserForm from "../components/login/NewUser.vue";
import MainHeader from "../components/header/MainHeader";

export default {
  components: {
    LoginForm,
    NewUserForm,
    MainHeader,
  },
};
</script>

<style></style>
