<template>
  <div class="dashboard">
    <dashboard-header :user="user" @create-column="handleCreateColumn" />
    <board />
  </div>
</template>

<script>
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Board from "../components/dashboard/Board";
import { getCurrentSession } from "../../utils/user";

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
  methods: {
    handleCreateColumn() {
      console.log("Create column");
    }
  },
  components: {
    DashboardHeader,
    Board
  }
};
</script>

<style></style>
