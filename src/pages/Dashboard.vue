<template>
  <div class="dashboard">
    <dashboard-header :user="user" @create-frame="handleCreateFrame" />
    <board />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import gettersTypes from "../store/frames/getters.types";
import framesStore from "../mixins/frames.store";
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
    this.setFramesAsync();
  },
  mixins: [framesStore],
  methods: {
    handleCreateFrame() {
      console.log("Create frame");
    }
  },
  computed: {
    ...mapGetters("frames", {
      frames: gettersTypes.getFrames
    })
  },
  components: {
    DashboardHeader,
    Board
  }
};
</script>

<style></style>
