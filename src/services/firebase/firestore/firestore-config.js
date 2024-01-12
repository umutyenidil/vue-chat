import "firebase/firestore";
import firebase from "firebase/app";

const firebaseFirestore = firebase.firestore();
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
    firebaseFirestore,
    serverTimestamp,
};