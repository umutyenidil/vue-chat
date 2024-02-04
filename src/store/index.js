import {createStore} from 'vuex'

import modalModule from '@/store/modules/general/modal';
import authModule from '@/store/modules/general/auth';
import registerPageModule from '@/store/modules/pages/register-page';
import moduleChatRoomPage from '@/store/modules/pages/chat-room-page';

export default createStore({
    modules: {
        modalModule,
        registerPageModule,
        moduleChatRoomPage,
        authModule,
    }
})
