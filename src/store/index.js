import Vue from "vue";
import Vuex from "vuex";
import frames from "./frames";
import todos from "./todos";
import modals from "./modals";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    frames,
    todos,
    modals
  }
});

export default store;
