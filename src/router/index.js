import {createRouter, createWebHistory} from 'vue-router'
import WelcomePage from '@/views/pages/welcome/WelcomePage.vue';

const routes = [
    {
        path: '/',
        name: 'welcome-page',
        component: WelcomePage
    },
    {
        path: '/chat-room',
        name: 'chat-room-page',
        component: () => import( '@/views/pages/chat-room/ChatRoomPage.vue')
    },
    {
        path: '/auth/register',
        name: 'register-page',
        component: () => import( '@/views/pages/register/RegisterPage.vue')
    },
    {
        path: '/auth/login',
        name: 'login-page',
        component: () => import( '@/views/pages/login/LoginPage.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
