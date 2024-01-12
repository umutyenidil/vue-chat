const initState = {
    errorBox: {
        isVisible: false,
        message: null,
    }
};

export default {
    namespaced: true,
    state: () => (initState),
    mutations: {
        showErrorBox(state, {message}) {
            state.errorBox.message = message;
            state.errorBox.isVisible = true;
        },
        closeErrorBox(state) {
            state.errorBox = initState.errorBox;
        },
        setErrorBoxMessage(state, {message}) {
            state.errorBox.message = message;
        },
        setErrorBoxVisibility(state, {visibility}) {
            state.errorBox.isVisible = visibility;
        }
    },
    actions: {
        init(context) {
            context.state.state = initState;
        },
        setErrorBoxVisibility(context, visibility) {
            context.commit('setErrorBoxVisibility', {visibility});
        },
        setErrorBoxMessage(context, message) {
            context.commit('setErrorBoxMessage', {message});
        }
    },
    getters: {
        isErrorBoxVisible(state) {
            return state.errorBox.isVisible;
        },
        errorBoxMessage(state) {
            return state.errorBox.message;
        }
    },
}