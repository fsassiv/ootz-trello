import Vue from "vue";
import Router from "vue-router";
import Login from "./pages/Login.vue";

//lazy-loading routes
const Dashboard = resolve => {
  require.ensure(
    ["./pages/Dashboard.vue"],
    () => {
      resolve(require("./pages/Dashboard.vue"));
    },
    "dashboard"
  );
};

Vue.use(Router);

const routes = new Router({
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "Login",
      alias: ["/", "/sign-up"],
      component: Login,
      meta: {
        privateRoute: false
      }
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        privateRoute: true
      }
    }
  ]
});

routes.beforeEach((to, _from, next) => {
  if (to.meta.privateRoute) {
    if (sessionStorage.getItem("currentSession")) {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
});

export default routes;
