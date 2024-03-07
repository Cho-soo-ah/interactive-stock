import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/AnimationIcon.vue')
    }
  ],
  scrollBehavior(to) {
    return {
      top: 0,
      left: 0,
      behavior: 'smooth'
    }
  }
})

export default router
