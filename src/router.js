import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "Login",
    },
    {
      path: "/login",
      name: 'Login',
      component: () => import("./ui/LogIn.vue"),
    },
    {
      path: "/markets",
      component: () => import("./pages/MarketList.vue"),
    },
    {
      path: "/markets/:marketId",
      name: "MarketDetails",
      component: () => import("./components/MarketDetails.vue"),
    },
    {
      path: '/cart',
      component: () => import('./components/UserCart.vue'),
    }
  ],
});

export default router;