export default {
    namespaced: true,
    state: () => ({
        user: null,
    }),
    mutations: {
        setCurrentUser(state, {user}) {
            state.user = user;
        }
    },
    actions: {
        setCurrentUser(context, {user}) {
            context.commit("setCurrentUser", {user});
        },
        removeCurrentUser(context) {
            context.state.user = null;
        }
    },
    getters: {
        currentUser(state) {
            return state.user;
        }
    },
}