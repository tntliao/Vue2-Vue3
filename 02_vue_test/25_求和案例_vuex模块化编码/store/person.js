import axios from "axios";
import { nanoid } from "nanoid";

export default {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.indexOf('王') === 0) {
                console.log('进入');
                context.commit('ADD_PERSON', value)
            } else {
                alert('姓名开通必须是王 ')
            }
        },
        addPerson(context) {
            axios.get('https://api.oick.cn/dog/api.php').then(
                response => {
                    const value = response.data.slice(0, 4)
                    const obj = { id: nanoid(), name: value }
                    context.commit('ADD_PERSON', obj)
                }, error => {
                    alert(error.message)
                })
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            console.log(value);
            state.person.unshift(value);
        }
    },
    state: {
        person: [
            { id: '001', name: 'ljj' }
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.person[0].name;
        }
    }
}