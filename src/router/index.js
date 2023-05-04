// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/dictionary/experience',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/dictionary/experience',
        name: 'HhExperience',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/components/HhExperience.vue'),
      }
    ],
  },
  {
    path: '/blog',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/blog',
        name: 'Smart4ITBlog',
        component: () => import(/* webpackChunkName: "home" */ '@/components/Smart4ITBlog.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
