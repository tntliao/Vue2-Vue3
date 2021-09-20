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
                    path: 'news',
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xianqing',
                            // path: 'detail',
                            path: 'detail/:id/:title',
                            component: Detail,

                            /*
                                第一种写法：props对象，改对象中所有的key value的组合最终会通过props传递给Detail组件
                                适用 query 和 params
                             */
                            // props: { a: 'liao', b: 'jiajia' }

                            /*
                                第二种写法：props值未布尔值，布尔值未true，则把路由收到的所有params参数通过props传给Detail组件
                                适用 params
                             */
                            // props: true

                            /*
                                第三种写法：props值为函数，该函数返回对象中每一组key value都会通过props传给Detail组件 
                                适用 query 和 params
                             */
                            props(route) {
                                return {
                                    id: route.params.id,
                                    title: route.params.title,
                                }
                            }
                        }
                    ]
                },
            ]
        }
    ]
})


