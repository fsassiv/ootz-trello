<template>
  <header class="navbar main-header primary-bg-color with-opacity">
    <div class="container">
      <section v-if="$route.path === '/dashboard'" class="navbar-section d-flex space-between">
        <router-link to="/" class="navbar-brand mr-2 link-color">Challenge Flávio</router-link>
        <div class="main-header__options">
          <div class="form-group">
            <label class="form-switch">
              <input type="checkbox" @change="toggleTheme" :checked="user.theme==='dark'" />
              <i class="form-icon"></i> Dark mode?
            </label>
          </div>
          <a @click.prevent="handleLogout" class="btn btn-link link-color">Sair</a>
        </div>
      </section>
      <section v-else class="navbar-section">
        <router-link to="/" class="navbar-brand mr-2">Challenge Flávio</router-link>
        <router-link to="login" class="btn btn-link">Login</router-link>
        <router-link to="sign-up" class="btn btn-link">Cadastrar-se</router-link>
      </section>
    </div>
  </header>
</template>

<script>
import {
  logOut,
  getCurrentSession,
  updateUserTheme,
} from "../../../utils/user";

export default {
  name: "main-header",
  data() {
    return {
      user: getCurrentSession(),
    };
  },
  beforeUpdate() {
    this.user = getCurrentSession();
  },
  methods: {
    handleLogout() {
      document.querySelector("#theme-link").href =
        "/dist/theme/light-theme.css";
      logOut();
      this.user = {};
      this.$router.push("/");
    },
    toggleTheme() {
      const themeLink = document.querySelector("#theme-link");
      if (themeLink.getAttribute("href").match(/light/)) {
        themeLink.href = "/dist/theme/dark-theme.css";
        updateUserTheme("dark");
        document.querySelector("body").classList.add("dark");
      } else {
        themeLink.href = "/dist/theme/light-theme.css";
        updateUserTheme("light");
        document.querySelector("body").classList.remove("dark");
      }
    },
  },
};
</script>

<style></style>
