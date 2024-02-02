import {firebaseFirestore} from "@/services/firebase/firebase-config";


const addDocumentToCollection = async ({collectionName, document}) => {
    await firebaseFirestore.collection(collectionName).add(document);
};

const updateDocumentOnCollection = async ({}) => {

};

export {
    addDocumentToCollection
};