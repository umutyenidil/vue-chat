import {firebaseAuth} from '../firebase-config';

const firebaseCurrentUser = () => {
    try {
        return firebaseAuth.currentUser;
    } catch (error) {
        throw Error('something went wrong');
    }
};

export default firebaseCurrentUser;