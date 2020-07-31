import mutationsTypes from "./mutations.types";
import actionsTypes from "./actions.types.js";
import gettersTypes from "./getters.types";
import api from "../../../service/api";

export default {
  namespaced: true,
  state: { todos: [] },
  mutations: {
    [mutationsTypes.setTodos](state, payload) {
      state.todos = [...payload];
    }
  },
  actions: {
    [actionsTypes.setTodosAsync]({ commit }) {
      api
        .get("/frames")
        .then(({ data }) => {
          commit(mutationsTypes.setTodos, data);
        })
        .catch(console.error);
    }
  },
  getters: {
    [gettersTypes.getFrames]: state => state.todos
  }
};
