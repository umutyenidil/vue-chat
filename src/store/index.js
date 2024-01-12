import {createStore} from 'vuex'

import moduleModal from '@/store/modules/general/modal';
import moduleAuth from '@/store/modules/general/auth';
import moduleTheme from '@/store/modules/general/theme';
import moduleRegisterPage from '@/store/modules/pages/register-page';

export default createStore({
    state: {
        // modalState: {
        //     show: false,
        //     title: null,
        //     message: null,
        //     type: 'error',
        // }
    },
    getters: {},
    mutations: {
        // setModalMessage(state, {type, title, message}) {
        //     state.modalState.type = type;
        //     state.modalState.title = title;
        //     state.modalState.message = message;
        // },
        // showModal(state, {}) {
        //     state.modalState.show = true;
        // },
        // closeModal(state,{}){
        //     state.modalState.show = false;
        // }
    },
    actions: {
        // showModal(context){
        //     context.commit('showModal', {});
        // }
    },
    modules: {
        moduleModal,
        moduleRegisterPage,
        moduleAuth,
    }
})
