import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/fontend/Index.vue')
    },
    {
      path: '/Services',
      name: 'Services',
      component: () => import('@/pages/fontend/Services.vue')
    },
    {
      path: '/Package',
      name: 'Package',
      component: () => import('@/pages/fontend/Package.vue')
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: () => import('@/pages/fontend/Portfolio.vue')
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import('@/pages/fontend/Contact.vue')
    },
    {
      path: '/Aboutus',
      name: 'Aboutus',
      component: () => import('@/pages/fontend/Aboutus.vue')
    },
    {
      path: '/Service-Details',
      name: 'Service-Details',
      component: () => import('@/pages/fontend/ServiceDetails.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/pages/Dashboard/Index.vue')
    },
   
    
  ]
})

export default router
