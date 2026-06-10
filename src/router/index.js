import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', alias: '/home', component: () => import('../views/Home.vue') },
    { path: '/about', component: () => import('../views/About.vue') },
    { path: '/contact', component: () => import('../views/Contact.vue') },
    { path: '/profile', component: () => import('../views/Profile.vue') },
    {path: '/:pathMatch(.*)*',name: 'not-found',meta: {description: 'Page non trouvée'}, component: () => import('../views/NotFound.vue')},
  ],
})

export default router
 