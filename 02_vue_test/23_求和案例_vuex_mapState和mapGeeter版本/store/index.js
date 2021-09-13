import Vue from 'vue';
import Vuex from 'vuex';

const actions = {
    /* add(context, value) {
        context.commit('increment', value);
    },
    unAdd(context, value) {
        context.commit('decrement', value);
    }, */
    addOdd(context, value) {
        if (context.state.count % 2) {
            context.commit('increment', value);
        }
    },
    oddAwit(context, value) {
        setTimeout(() => {
            context.commit('increment', value);
        }, 500)
    }
};
const mutations = {
    increment(state, value) {
        state.count += value;
    },
    decrement(state, value) {
        state.count -= value;
    }
};
const state = {
    count: 1,
    school: '尚硅谷',
    subject: 'H5'
};


const getters = {
    bigCount(state) {
        return state.count * 10
    }
}

Vue.use(Vuex);

export default new Vuex.Store({ actions, mutations, state, getters })