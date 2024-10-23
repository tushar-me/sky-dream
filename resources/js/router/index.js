import {createRouter, createWebHistory} from 'vue-router'
import authMiddleware from "@/middleware/auth.ts";

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('@/pages/fontend/Index.vue')
        },
        {
            path: '/all-services',
            name: 'Front.Services',
            component: () => import('@/pages/fontend/Services.vue')
        },
        {
            path: '/single-services/:id',
            name: 'Front.SingleService',
            component: () => import('@/pages/fontend/SingleService.vue')
        },
        {
            path: '/all-package',
            name: 'Front.Package',
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
            path: '/admin',
            name: 'Admin',
            children: [
                {
                    path: '/admin/login',
                    name: 'Login',
                    component: () => import('@/pages/Auth/Login.vue')
                },
                {
                    path: '/admin/dashboard',
                    name: 'Dashboard',
                    component: () => import('@/pages/Dashboard/Index.vue')
                },
                {
                    path: '/admin/services',
                    name: 'Services',
                    component: () => import('@/pages/Services/Index.vue')
                },
                {
                    path: '/admin/services/add',
                    name: 'AddServices',
                    component: () => import('@/pages/Services/Add.vue')
                },
                {
                    path: '/admin/services/:id/edit',
                    name: 'EditServices',
                    component: () => import('@/pages/Services/Add.vue')
                },
                {
                    path: '/admin/package',
                    name: 'Package',
                    component: () => import('@/pages/Package/Index.vue')
                },
                {
                    path: '/admin/package/add',
                    name: 'AddPackage',
                    component: () => import('@/pages/Package/Add.vue')
                },
                {
                    path: '/admin/package/:id/edit',
                    name: 'EditPackage',
                    component: () => import('@/pages/Package/Add.vue')
                },
                {
                    path: '/admin/gallery',
                    name: 'Gallery',
                    component: () => import('@/pages/Gallery/Index.vue')
                },
                {
                    path: '/admin/gallery/add',
                    name: 'AddGallery',
                    component: () => import('@/pages/Gallery/Add.vue')
                },
                {
                    path: '/admin/contacts',
                    name: 'Contacts',
                    component: () => import('@/pages/Contacts/Index.vue')
                },
                {
                    path: '/admin/setting',
                    name: 'Setting',
                    component: () => import('@/pages/Setting/Index.vue')
                },
                {
                    path: '/admin/profile/settings',
                    name: 'profileSetup',
                    component: () => import('@/pages/ProfileSettings/Index.vue')
                }
            ]
        }
    ]
})

router.beforeEach(authMiddleware)

export default router
