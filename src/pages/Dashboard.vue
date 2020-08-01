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
      user: {}
    };
  },
  mounted() {
    this.user = getCurrentSession();
  },
  components: {
    DashboardHeader,
    Board,
    AddTodoModal,
    AddFrameModal
  }
};
</script>

<style></style>
