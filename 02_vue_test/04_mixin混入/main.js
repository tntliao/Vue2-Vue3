import Vue from 'vue';
import App from './App.vue';
import { person, showTitle } from './utils/mixin'

//全局混入
Vue.mixin(person);
Vue.mixin(showTitle);

new Vue({
    render: h => h(App)
}).$mount('#app');