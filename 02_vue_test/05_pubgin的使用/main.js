import Vue from 'vue';
import App from './App.vue';
import pubgin from './pubgin';


Vue.use(pubgin);
new Vue({
    render: h => h(App)
}).$mount('#app');