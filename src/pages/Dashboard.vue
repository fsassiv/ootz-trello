<template>
  <div class="dashboard">
    <dashboard-header :user="user" />
    <board />
    <add-todo-modal />
    <add-frame-modal />
  </div>
</template>

<script>
import { getCurrentSession } from "../../utils/user";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Board from "../components/dashboard/Board";
import AddTodoModal from "../components/modals/AddTodo";
import AddFrameModal from "../components/modals/AddFrame";

export default {
  name: "dashboard",
  data() {
    return {
      user: {},
    };
  },
  watch: {
    user(userProps) {
      const themeLink = document.querySelector("#theme-link");
      if (this.user.theme === "dark") {
        themeLink.href = "/dist/theme/dark-theme.css";
        document.querySelector("body").classList.add("dark");
      } else {
        themeLink.href = "/dist/theme/light-theme.css";
        document.querySelector("body").classList.remove("dark");
      }
    },
  },
  mounted() {
    this.user = getCurrentSession();
  },
  components: {
    DashboardHeader,
    Board,
    AddTodoModal,
    AddFrameModal,
  },
};
</script>

<style></style>
