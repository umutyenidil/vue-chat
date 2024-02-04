import {firebaseAuth} from '../firebase-config';

const firebaseLogin = async ({email, password}) => {
    try {
        let user = await firebaseAuth.signInWithEmailAndPassword(email, password);

        if (!user) {
            console.log('user not founded');
            throw new Error('something went wrong');
        }

        return user;
    } catch (error) {
        console.log(error);
        let message;
        switch (error.code) {
            case 'auth/invalid-email':
                message = 'Invalid email';
                break;
            case 'auth/user-disabled':
                message = 'User has been blocked by administrator';
                break;
            case 'auth/user-not-found':
            case 'auth/wrong-password':
            case 'auth/invalid-credential':
                message = 'email address or password is wrong';
                break;
            default:
                message = 'something went wrong';
                break;
        }
        throw new Error(message);
    }
};

export default firebaseLogin;