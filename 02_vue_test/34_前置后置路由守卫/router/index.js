import VueRouter from "vue-router";
import Home from '../pages/Home';
import About from '../pages/About';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';

const router = new VueRouter({
    routes: [
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' }
        },
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '关于' },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' }
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '信息' },
                    children: [
                        {
                            name: 'xianqing',
                            path: 'detail/:id/:title',
                            component: Detail,
                            meta: { title: '新闻' },
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

// 前置路由守卫，页面切换前调用
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        if (localStorage.getItem('school') === 'atguigu') {
            next()
        } else {
            alert('学校名不是atguigu')
        }
    } else {
        next()
    }
})


router.afterEach((to) => {
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = '硅谷系统'
    }
})

export default router;