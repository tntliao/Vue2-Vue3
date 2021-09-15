export default {
    namespaced: true,
    actions: {
        addOdd(context, value) {
            if (context.state.count % 2) {
                context.commit('INCREMENT', value);
            }
        },
        oddAwit(context, value) {
            setTimeout(() => {
                context.commit('INCREMENT', value);
            }, 500)
        }
    },
    mutations: {
        INCREMENT(state, value) {
            state.count += value;
        },
        DECREMENT(state, value) {
            state.count -= value;
        },
    },
    state: {
        count: 1,
        school: '尚硅谷',
        subject: 'H5',
    },
    getters: {
        bigCount(state) {
            return state.count * 10
        }
    }
}