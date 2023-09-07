import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: ()=>import("../layouts/AuthLayout.vue")
    },
    { 
      path: "/auth",
      component: ()=>import("../layouts/AuthLayout.vue"),
      redirect: "/auth/login",
      children: [
        {
          path: "login",
          component: ()=>import("../views/LoginView.vue")
        }
      ]
    }
  ]
})

export default router
