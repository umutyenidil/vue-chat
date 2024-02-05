const getInitState = () => {
    return {
        chats: null,
    };
};

export default {
    namespaced: true,
    state: getInitState,
    mutations: {
        resetState(state) {
            Object.assign(state, getInitState());
        },
        setChats(state, {chats}) {
            state.chats = chats;
        },
    },
    actions: {
        init(context) {
            context.commit('resetState');
        },
        setChats(context, {chats}) {
            context.commit('setChats', {chats});
        },

    },
    getters: {
        chats(state) {
            return state.chats;
        },
    },
}