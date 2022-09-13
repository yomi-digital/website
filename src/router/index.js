import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Team from "../views/Team.vue";
import Services from "../views/Services.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/team",
    name: "team",
    component: Team,
  },
  {
    path: "/services",
    name: "services",
    component: Services,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
