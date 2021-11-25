import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../pages/index.vue'),
    },
    {
        path: '/example/scrollTop',
        name: 'examplescrollTop',
        component: () => import('../pages/example/scrollTop.vue'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router