import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCDVw9l2TtrsENy0m3zFZV4g9mdhqn--Xc",
    authDomain: "vue-chat-3cf60.firebaseapp.com",
    projectId: "vue-chat-3cf60",
    storageBucket: "vue-chat-3cf60.appspot.com",
    messagingSenderId: "831750370167",
    appId: "1:831750370167:web:861fa9f28895191dbb2772"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebase.auth();
const firebaseFirestore = firebase.firestore();

export {
    firebaseApp,
    firebaseAuth,
    firebaseFirestore,
};