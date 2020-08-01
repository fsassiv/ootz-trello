import mutationsTypes from "./mutations.types";
import gettersTypes from "./getters.types";

export default {
  namespaced: true,
  state: {
    addTodoIsActive: false,
    addTodoTo: "",
    removeTodoFrom: "",
    addFrameIsActive: false
  },
  mutations: {
    [mutationsTypes.toggleAddTodoState](state, payload) {
      Object.assign(state, {
        addTodoTo: payload,
        addTodoIsActive: !state.addTodoIsActive
      });
    },
    [mutationsTypes.toggleAddFrameState](state) {
      state.addFrameIsActive = !state.addFrameIsActive;
    }
  },
  getters: {
    [gettersTypes.getTodoState]: state => state.addTodoIsActive,
    [gettersTypes.getFrameState]: state => state.addFrameIsActive,
    [gettersTypes.addTodoTo]: state => state.addTodoTo,
    [gettersTypes.removeTodoFrom]: state => state.removeTodoFrom
  }
};
