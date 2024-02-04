const getInitState = () => {
    return {
        error: null,
        isFormLoading: false,
    };
}

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
        toggleIsFormLoading(state) {
            state.isFormLoading = !state.isFormLoading;
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
        toggleIsFormLoading(context) {
            context.commit('toggleIsFormLoading');
        }
    },
    getters: {
        error(state) {
            return state.error;
        },
        isFormLoading(state) {
            return state.isFormLoading;
        }
    },
}