import Vue from "vue";
import router from "./routes";
import "./assets/styles/index.scss";
import App from "./App.vue";

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
