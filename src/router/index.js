import {createRouter, createWebHistory} from 'vue-router'
import store from "@/store";

import WelcomePage from '@/views/pages/welcome/WelcomePage.vue';
import routeNames from "@/router/route-names";
import firebaseGetCurrentUser from "@/services/firebase/auth/get-current-user";
import routeGuards from '@/router/route-guards';


const routes = [
    {
        path: '/',
        name: routeNames.welcomePage,
        component: WelcomePage,
        beforeEnter: routeGuards.welcomePageGuard,
    },
    {
        path: '/home',
        name: routeNames.homePage,
        component: () => import('@/views/pages/home/HomePage.vue'),
        beforeEnter: routeGuards.authGuard,
    },
    {
        path: '/chat/:id',
        name: routeNames.chatRoomPage,
        component: () => import( '@/views/pages/chat-room/ChatRoomPage.vue'),
        beforeEnter: routeGuards.authGuard,
    },
    {
        path: '/auth/register',
        name: routeNames.registerPage,
        component: () => import( '@/views/pages/register/RegisterPage.vue')
    },
    {
        path: '/auth/login',
        name: routeNames.loginPage,
        component: () => import( '@/views/pages/login/LoginPage.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach(async (to, from, next) => {
    let user = firebaseGetCurrentUser();

    if (user) {
        await store.dispatch('authModule/setCurrentUser', {user});
    }

    next();
})

export default router
