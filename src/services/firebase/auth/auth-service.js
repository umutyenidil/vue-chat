import {firebaseAuth} from '../firebase-config';

const register = async (username, email, password) => {
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

const login = async (email, password) => {
    try {
        const res = await firebaseAuth.signInWithEmailAndPassword(email, password);

        if (!res) throw new Error('Cannot login now.');

        return res.user;
    } catch (error) {
        let message;
        switch (error.code) {
            case 'auth/invalid-email':
                message = 'Invalid email';
                break;
            case 'auth/invalid-credential':
                message = 'Wrong password or email address';
                break;
            default:
                message = 'something went wrong';
                break;
        }

        throw new Error(message);
    }
};

const logout = async () => {
    try {
        await firebaseAuth.signOut();
    } catch (error) {
        console.log(error);
    }
};

export {
    register,
    login,
    logout,
};