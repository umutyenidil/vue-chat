import {firebaseFirestore} from "@/services/firebase/firebase-config";

const firebaseGetAllChats = async () => {
    const chatsRef = firebaseFirestore.collection('chats');
    const chatsQuery = chatsRef.where()
};

export default firebaseGetAllChats;