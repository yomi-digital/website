import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Team from "../views/Team.vue";
import Services from "../views/Services.vue";
import Portfolio from "../views/Portfolio.vue";
import Project from "../views/Project.vue";
import Internal from "../views/Internal.vue";

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
  {
    path: "/portfolio",
    name: "portfolio",
    component: Portfolio,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: Portfolio,
  },
  {
    path: "/portfolio/:id",
    name: "project",
    component: Project,
  },
  {
    path: "/internal-project",
    name: "internal",
    component: Internal,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
