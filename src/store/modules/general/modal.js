export default {
    namespaced: true,
    state: () => ({
        isVisible: false,
        type: null,
        title: null,
        message: null,
    }),
    mutations: {
        setModalMessage(state, {type, title, message}) {
            state.type = type;
            state.title = title;
            state.message = message;
        },
        showModal(state) {
            state.isVisible = true;
        },
        closeModal(state) {
            state.isVisible = false;
        }
    },
    actions: {
        showModal(context) {
            context.commit('showModal', {});
        }
    },
    getters: {
        isModalVisible(state){

        }
    },
}