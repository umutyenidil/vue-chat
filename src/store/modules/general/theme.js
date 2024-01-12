const initalState = {
    isLight: true,
}
export default {
    namespaced: true,
    state: () => (initalState),
    mutations: {
        setDarkTheme(state) {
            state.isLight = false;
        },
        setLightTheme(state) {
            state.isLight = true;
        }
    },
    actions: {
        setDarkMode(context) {
            context.commit('setDarkTheme');
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