export default {
    namespaced: true,
    state: () => ({
        isVisible: false,
        type: null,
        title: null,
        message: null,
    }),
    mutations: {
        showModal(state, {type, title, message}) {
            state.type = type;
            state.title = title;
            state.message = message;
            state.isVisible = true;
        },
        closeModal(state) {
            state.isVisible = false;
        }
    },
    actions: {
        showModal(context, {type, title, message}) {
            context.commit('showModal', {type, title, message});
        },
        closeModal(context) {
            context.commit('closeModal');
        },
    },
    getters: {
        isModalVisible(state) {

        }
    },
}