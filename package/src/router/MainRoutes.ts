const MainRoutes = {
    path: '/main',
    meta: {
        requiresAuth: true
    },
    redirect: '/main',
    component: () => import('@/layouts/full/FullLayout.vue'),
    children: [
        {
            name: 'Dashboard',
            path: '/',
            component: () => import('@/views/dashboard/index.vue')
        },
        {
            name: 'Typography',
            path: '/ui/typography',
            component: () => import('@/views/components/Typography.vue')
        },
        {
            name: 'Shadow',
            path: '/ui/shadow',
            component: () => import('@/views/components/Shadow.vue')
        },
        {
            name: 'Alert',
            path: '/ui/alerts',
            component: () => import('@/views/components/Alerts.vue')
        },
        {
            name: 'Buttons',
            path: '/ui/buttons',
            component: () => import('@/views/components/Buttons.vue')
        },
        {
            name: 'Cards',
            path: '/ui/cards',
            component: () => import('@/views/components/Cards.vue')
        },
        {
            name: 'Tables',
            path: '/ui/tables',
            component: () => import('@/views/components/Tables.vue')
        },
        {
            name: 'Icons',
            path: '/icons',
            component: () => import('@/views/pages/Icons.vue')
        },
        {
            name: 'Starter',
            path: '/sample-page',
            component: () => import('@/views/pages/SamplePage.vue')
        },
    ]
};

export default MainRoutes;
