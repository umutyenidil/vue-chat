import {firebaseAuth} from '../firebase-config';
import {firebaseFirestore} from "@/services/firebase/firebase-config";


const firebaseRegister = async ({username, email, password}) => {
    try {
        const credential = await firebaseAuth.createUserWithEmailAndPassword(email, password);

        if (!credential) throw new Error('Has not been registered');

        await firebaseFirestore.collection('users').doc(credential.user.uid).set({
            emailAddress: email,
            username: username,
        });

        return credential.user;
    } catch (error) {
        console.log(error);
        console.log(error.code);

        let message;
        switch (error.code) {
            case 'auth/invalid-email':
                message = 'Invalid email';
                break;
            case 'auth/weak-password':
                message = 'Try stronger password';
                break;
            case 'auth/email-already-in-use':
                message = 'Email address already in use';
                break;
            default:
                message = 'something went wrong';
                break;
        }
        throw new Error(message);
    }
};

export default firebaseRegister;