import {firebaseAuth} from '../firebase-config';

const firebaseRegister = async ({username, email, password}) => {
    try {
        const res = await firebaseAuth.createUserWithEmailAndPassword(email, password);

        if (!res) throw new Error('Has not been registered');

        await res.user.updateProfile({displayName: username});

        return res.user;
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