import Vue from "vue";
import "spectre.css";
import router from "./routes";
import "./assets/styles/index.scss";
import App from "./App.vue";
import store from "./store/index";

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
