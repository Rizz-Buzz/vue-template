import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SamplePage from '@/pages/sample/SamplePage.vue'

import DashboardPage from '@/pages/dashboard/DashboardPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',

      component: HomeView
    },
    {
      path: '/sample',
      name: 'sample',
      component: SamplePage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage
    }
    // ... other routes
  ]
})

export default router
