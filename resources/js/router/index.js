import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/fontend/Index.vue')
    },
    {
      path: '/services',
      name: 'Services',
      component: () => import('@/pages/fontend/Services.vue')
    },
    {
      path: '/package',
      name: 'Package',
      component: () => import('@/pages/fontend/Package.vue')
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: () => import('@/pages/fontend/Portfolio.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/pages/fontend/Contact.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/pages/fontend/About.vue')
    },
    {
      path: '/service-details',
      name: 'Service-Details',
      component: () => import('@/pages/fontend/ServiceDetails.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/pages/Dashboard/Index.vue')
    },
    {
      path: '/dashboard/services',
      name: 'Services',
      component: () => import('@/pages/Dashboard/Services/Index.vue')
    },
    {
      path: '/dashboard/services/add',
      name: 'AddServices',
      component: () => import('@/pages/Dashboard/Services/Add.vue')
    },
    {
      path: '/dashboard/package',
      name: 'Package',
      component: () => import('@/pages/Dashboard/Package/Index.vue')
    },
    {
      path: '/dashboard/package/add',
      name: 'AddPackage',
      component: () => import('@/pages/Dashboard/Package/Add.vue')
    },
    {
      path: '/dashboard/gallary',
      name: 'Gallary',
      component: () => import('@/pages/Dashboard/Gallary/Index.vue')
    },
    {
      path: '/dashboard/gallary/add',
      name: 'AddGallary',
      component: () => import('@/pages/Dashboard/Gallary/Add.vue')
    },
    {
      path: '/dashboard/setting',
      name: 'Setting',
      component: () => import('@/pages/Dashboard/Setting/Index.vue')
    },
    
  ]
})

export default router
