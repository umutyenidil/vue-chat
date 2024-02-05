import {firebaseFirestore} from "@/services/firebase/firebase-config";

const firebaseGetAllChats = async (userId) => {
    const chatsRef = firebaseFirestore.collection('chats');
    const userRef = firebaseFirestore.collection('users').doc(userId);
    const chatsQuery = await firebaseFirestore.collection('chats').where('contributors', "in", [userRef]);
    const chats = await chatsQuery.get();
    return chats.docs;
};

export default firebaseGetAllChats;