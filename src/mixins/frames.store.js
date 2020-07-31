import { mapActions } from "vuex";
import actionsTypes from "../store/frames/actions.types";

export default {
  methods: {
    ...mapActions("frames", {
      setFramesAsync: actionsTypes.setFramesAsync
    })
  }
};
