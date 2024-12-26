import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/banner',
      name: 'banner',
      component: () => import('../views/BannerView.vue'),
    },
    {
      path: '/splash',
      name: 'splash',
      component: () => import('../views/SplashView.vue'),
    },
    {
      path: '/interaction',
      name: 'interaction',
      component: () => import('../views/InteractionView.vue'),
    },
    {
      path: '/rewarded',
      name: 'rewarded',
      component: () => import('../views/RewardedView.vue'),
    },
    {
      path: '/splashTemplate',
      name: 'splashTemplate',
      component: () => import('../views/SplashTemplateView.vue'),
    },
    {
      path: '/interactionTemplate',
      name: 'interactionTemplate',
      component: () => import('../views/InteractionTemplateView.vue'),
    },
    {
      path: '/rewardedTemplate',
      name: 'rewardedTemplate',
      component: () => import('../views/RewardedTemplateView.vue'),
    }
  ],
})

export default router
