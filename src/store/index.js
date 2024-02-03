import {createStore} from 'vuex'

import moduleModal from '@/store/modules/general/modal';
import moduleAuth from '@/store/modules/general/auth';
import moduleRegisterPage from '@/store/modules/pages/register-page';
import moduleChatRoomPage from '@/store/modules/pages/chat-room-page';

export default createStore({
    modules: {
        moduleModal,
        moduleRegisterPage,
        moduleChatRoomPage,
        moduleAuth,
    }
})
