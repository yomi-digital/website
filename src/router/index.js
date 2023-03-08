import Vue from "vue";
import VueRouter from "vue-router";
import Hey from "../views/Hey.vue";
import Team from "../views/Team.vue";
import Services from "../views/Services.vue";
import Portfolio from "../views/Portfolio.vue";
import Project from "../views/Project.vue";
import Internal from "../views/Internal.vue";
import Testing from "../views/Testing.vue";
import Blog from "../views/Blog.vue";
/* import Article from "../views/Article.vue"; */
import Contacts from "../views/Contacts.vue";
import Err from "../views/Err.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Hey,
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
    path: "/portfolio/:id",
    name: "project",
    component: Project,
  },
  {
    path: "/internal-project",
    name: "internal",
    component: Internal,
  },
  {
    path: "/testing",
    name: "testing",
    component: Testing,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: Contacts,
  },
/*   {
    path: "/blog/:id",
    name: "Article",
    component: Article,
  }, */
  { path: '/404', component: Err },  
  { path: '*', redirect: '/404' }, 
];

const router = new VueRouter({
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior (to, from, savedPosition) {
    if(to.name != 'portfolio' || !to.query?.project)
    return { x: 0, y: 0 }
  },
});


export default router;
