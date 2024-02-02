const initState = {
    chatRoom: null,
};

export default {
    namespaced: true,
    state: () => (initState),
    mutations: {
        setChatRoom(state, {chatRoom}) {
            state.chatRoom = chatRoom;
        },
        addMessage(state, {message}) {
            state.messages.push(message);
        }
    },
    actions: {
        reset(context) {
            context.state.state = initState;
        },
        setChatRoom(context, {chatRoom}) {
            context.commit('setChatRoom', {chatRoom});
        },
        addMessage(context, {message}) {
            context.commit('addMessage', {message});
        }
    },
    getters: {
        chatRoom(state) {
            return state.chatRoom;
        }
    },
}