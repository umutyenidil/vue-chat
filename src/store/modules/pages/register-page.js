const getInitState = () => {
    return {
        error: null,
    };
};

export default {
    namespaced: true,
    state: getInitState,
    mutations: {
        resetState(state) {
            Object.assign(state, getInitState());
        },
        setError(state, {message}) {
            state.error = message;
        },
        clearError(state) {
            state.error = null;
        },
    },
    actions: {
        init(context) {
            context.commit('resetState');
        },
        showError(context, {message}) {
            context.commit('setError', {message});
        },
        closeError(context) {
            context.commit('clearError');
        },

    },
    getters: {
        error(state) {
            return state.error;
        },
    },
}