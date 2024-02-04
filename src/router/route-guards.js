import firebaseGetCurrentUser from "@/services/firebase/auth/get-current-user";
import routeNames from "@/router/route-names";

const authGuard = (to, from, next) => {
    let user = firebaseGetCurrentUser();

    if (!user) {
        next({name: routeNames.loginPage});
        return;
    }

    next();
};

const welcomePageGuard = (to, from, next) => {
    let user = firebaseGetCurrentUser();

    if (user) {
        next({name: routeNames.homePage});
        return;
    }

    next();
};

export default {
    authGuard,
    welcomePageGuard,
};