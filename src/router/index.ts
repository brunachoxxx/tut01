import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChisiamoView from "../views/ChisiamoView.vue";
import ContattiView from "../views/ContattiView.vue";
import GrigliaView from "../views/GrigliaView.vue";
import NotFound from "../views/NotFound.vue";
import DinamicGrid from "../views/DinamicGrid.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/chisiamo",
    name: "chisiamo",
    component: ChisiamoView,
  },
  {
    path: "/contatti",
    name: "contatti",
    component: ContattiView,
  },
  {
    path: "/griglia",
    name: "griglia",
    component: GrigliaView,
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/dgriglia",
    name: "DinamicGrid",
    component: DinamicGrid,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
