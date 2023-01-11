import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "../Auth/useAuth";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: import("../views/Auth/LoginView.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: import("../views/Auth/RegisterView.vue"),
    },
    {
      path: "/item",
      children: [
        {
          path: "",
          name: "item",
          component: import("../views/Item/index.vue"),
        },
        {
          path: ":id",
          component: import("../views/Item/Edit.vue"),
        },
        {
          path: "add",
          component: import("../views/Item/Add.vue"),
        },
      ],
    },
    {
      path: "/orders",
      children: [
        {
          path: "",
          component: import("../views/Orders/index.vue"),
        },
        {
          path: ":id",
          component: import("../views/Orders/Edit/index.vue"),
        },
        {
          path: "add",
          component: import("../views/Orders/Add/index.vue"),
        },
      ],
    },
    {
      path: "/test",
      component: import("../views/Test.vue"),
    },

    {
      path: "/payments",
      children: [
        {
          path: "",
          component: import("../views/Payment/index.vue"),
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  let auth = useAuth();
  if ((to.path === "/login" || to.path === "/register") && auth?.loggedIn)
    next({ name: "Home" });

  if ((to.path === "/login" || to.path === "/register") && !auth?.loggedIn)
    next();

  if (!auth?.loggedIn) next({ name: "Login" }); //unAuth Go to Login
  else next();

  next();
});

export default router;
