import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {firebaseApp} from "@/services/firebase/firebase-config";

let app;

firebaseApp.auth().onAuthStateChanged(async () => {
    if (!app) {
        app = createApp(App).use(store).use(router).mount('#app');
    }
});


// createApp(App).use(store).use(router).mount('#app');
