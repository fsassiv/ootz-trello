import Vue from "vue";
import Vuex from "vuex";
import frames from "./frames";
import todos from "./todos";
import modals from "./modals";
import rootMutationsTypes from "./mutations.types";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    showToast: false,
    toastContent: {
      type: "error",
      message: ""
    }
  },
  mutations: {
    [rootMutationsTypes.showToast](state, payload) {
      Object.assign(state, {
        showToast: true,
        toastContent: { ...payload }
      });
    },
    [rootMutationsTypes.hideToast](state) {
      Object.assign(state, {
        showToast: false,
        toastContent: { type: "error", message: "" }
      });
    }
  },
  getters: {
    getToastContent: state => state.toastContent
  },
  modules: {
    frames,
    todos,
    modals
  }
});

export default store;
