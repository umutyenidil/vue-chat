import {createRouter, createWebHistory} from 'vue-router'
import WelcomePage from '@/views/pages/welcome/WelcomePage.vue';
import {firebaseApp} from "@/services/firebase/firebase-config";

const authGuard = (to, from, next) => {
    let user = firebaseApp.auth().currentUser;

    if (!user) {
        next({name: 'login-page'});
        return;
    }

    next();
};

const routes = [
    {
        path: '/',
        name: 'welcome-page',
        component: WelcomePage
    },
    {
        path: '/chat-room',
        name: 'chat-room-page',
        component: () => import( '@/views/pages/chat-room/ChatRoomPage.vue'),
        beforeEnter: authGuard,
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
