import {createStore} from 'vuex'

import modalModule from '@/store/modules/general/modal';
import authModule from '@/store/modules/general/auth';
import registerPageModule from '@/store/modules/pages/register-page';
import loginPageModule from '@/store/modules/pages/login-page';
import moduleChatRoomPage from '@/store/modules/pages/chat-room-page';
import homePageModule from '@/store/modules/pages/home-page';

export default createStore({
    modules: {
        modalModule,
        registerPageModule,
        loginPageModule,
        moduleChatRoomPage,
        authModule,
        homePageModule,
    }
})
