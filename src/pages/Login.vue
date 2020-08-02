<template>
  <div class="login">
    <div class="login-content">
      <div v-show="$store.state.showToast" class="container">
        <toast />
      </div>
      <div class="columns">
        <div class="column col-3 col-sm-8 col-lg-4 col-mx-auto">
          <login-form v-if="$route.path === '/' || $route.path === '/login'" />
          <new-user-form v-if="$route.path === '/sign-up'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/login/Login.vue";
import NewUserForm from "../components/login/NewUser.vue";
import Toast from "../components/taost/Toast";

export default {
  components: {
    LoginForm,
    NewUserForm,
    Toast,
  },
};
</script>

<style></style>
