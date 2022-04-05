import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomeView.vue";
import Admin from "../views/Admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homeView",
    component: Home,
  },
  {
    path: "/admin",
    name: "adminView",
    component: Admin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
