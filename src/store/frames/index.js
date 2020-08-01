import mutationsTypes from "./mutations.types";
import actionsTypes from "./actions.types";
import gettersTypes from "./getters.types";
import api from "../../../service/api";

export default {
  namespaced: true,
  state: { frames: [] },
  mutations: {
    [mutationsTypes.setFrames](state, payload) {
      state.frames = [...payload];
    }
  },
  actions: {
    [actionsTypes.setFramesAsync]({ commit }) {
      api
        .get("/frames")
        .then(({ data }) => {
          commit(mutationsTypes.setFrames, data.data);
        })
        .catch(console.error);
    }
  },
  getters: {
    [gettersTypes.getFrames]: state => state.frames
  }
};
