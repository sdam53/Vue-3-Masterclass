import { createApp } from "vue";
import App from "./App.vue";
import Router from "./router/router.js";

/*
import VueRouter from "vue-router";
import PageHome from "./components/PageHome";
const routes = [{ path: "/", component: PageHome }];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: routes
});
app.use(router);
*/

const app = createApp(App);
app.use(Router);
app.mount("#app");
