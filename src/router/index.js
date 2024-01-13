import {createRouter, createWebHistory} from 'vue-router'
import WelcomePage from '@/views/pages/welcome/WelcomePage.vue';
import {firebaseApp} from "@/services/firebase/firebase-config";
import routeNames from "@/router/route-names";

import store from "@/store";

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
        name: routeNames.welcomePage,
        component: WelcomePage
    },
    {
        path: '/chat-room',
        name: routeNames.chatRoomPage,
        component: () => import( '@/views/pages/chat-room/ChatRoomPage.vue'),
        beforeEnter: authGuard,
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
    console.log(`${to.name} route girildi`);
    let user = firebaseApp.auth().currentUser;

    if (user) {
        await store.dispatch('moduleAuth/setCurrentUser', {user});

        const testUser = await store.getters["moduleAuth/currentUser"];

        if (testUser) {
            console.log('test user basariyla set edildi');
        }
    }

    next();
})

export default router
