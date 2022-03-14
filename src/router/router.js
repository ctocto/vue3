// routes.js
const routes = [
    {   //一级路由
        path: '/',
        name: '/',
        title: '首页',
        component: () => import('@/components/HelloWorld.vue'),
        children: [  // 二级路由
            {
                path: 'mainPage',
                name: 'mainPage',
                title: '主页',
                component: () => import('@/components/mainPage.vue')
            }
        ]
    },
    // {
    //     path: '/login',
    //     name: 'login',
    //     title: '登录',
    //     component: () => import('../components/login.vue'),
    //     meta: {
    //         transition: 'down'
    //     }
    // }
]

export default routes