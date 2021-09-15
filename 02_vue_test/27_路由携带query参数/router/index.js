import VueRouter from "vue-router";
import Home from '../pages/Home';
import About from '../pages/About';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: About,
            children: [
                {
                    path: 'news', component: News
                },
                {
                    path: 'message', component: Message,
                    children: [
                        { path: 'detail', component: Detail }
                    ]
                },
            ]
        }
    ]
})


