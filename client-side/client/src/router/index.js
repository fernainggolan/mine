import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue"
import AboutPage from "../views/AboutPage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import RentPage from "../views/RentPage.vue";
import DetailRentPage from "../views/DetailRentPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/rent",
      name: "rent",
      component: RentPage,
    },
    {
      path: "/rent/detail/:id/:price/:trxcode",
      name: "rent-detail",
      component: DetailRentPage,
    },
  ],
});

router.beforeEach(async (to, from) => {
  if (!localStorage.access_token && to.name === "rent-detail") {
    return { name: "login" };
  } else if (
    (localStorage.access_token && to.name === "login") ||
    (localStorage.access_token && to.name === "register")
  ) {
    return { name: "home" };
  }
});

export default router;
