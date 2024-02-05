import {firebaseFirestore} from "@/services/firebase/firebase-config";

const firebaseGetAllChats = async (userId) => {
    const chatsColRef = firebaseFirestore.collection('chats');
    const userRef = firebaseFirestore.collection('users').doc(userId);
    const chatsColQuery = await chatsColRef.where('contributors', "array-contains", userRef);
    const chats = await chatsColQuery.get();
    return chats.docs;
};

export default firebaseGetAllChats;