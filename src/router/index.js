import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/LoginView.vue";
import Register from "../views/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/items",
      children:[
        {
          path:"",
          component:import('../views/Items/index.vue')
        },
        {
          path:':id',
          component:import('../views/Items/Edit.vue')
        },
        {
          path:'add',
          component:import('../views/Items/Add.vue')
        }
      ]
    },
    {
      path: "/orders",
      children:[
        {
          path:"",
          component:import('../views/Orders/index.vue')
        },
        {
          path:':id',
          component:import('../views/Orders/Edit.vue')
        },
        {
          path:'add',
          component:import('../views/Orders/Add.vue')
        }
      ]
    },
    {
      path: "/payments",
      children:[
        {
          path:"",
          component:import('../views/Payments/index.vue')
        },
        {
          path:':id',
          component:import('../views/Payments/Edit.vue')
        },
        {
          path:'add',
          component:import('../views/Payments/Add.vue')
        }
      ]
    },
    {
      path: "/invoices",
      children:[
        {
          path:"",
          component:import('../views/Invoices/index.vue')
        },
        {
          path:':id',
          component:import('../views/Invoices/Edit.vue')
        },
        {
          path:'add',
          component:import('../views/Invoices/Add.vue')
        }
      ]
    },
    
    
  ],
  // linkActiveClass:'activeNav'
});

export default router;
