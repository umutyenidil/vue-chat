import {firebaseAuth} from '../firebase-config';

const firebaseGetCurrentUser = () => {
    try {
        return firebaseAuth.currentUser;
    } catch (error) {
        throw Error('something went wrong');
    }
};

export default firebaseGetCurrentUser;