import Vue from "vue";
import Vuex from "vuex";
import frames from "./frames";
import todos from "./todos";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    frames,
    todos
  }
});

export default store;
