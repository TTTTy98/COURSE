import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: 'Login'
        },
        component: () => import('../view/Login.vue')
    },
    {
        path: '/home',
        name: 'Home',
        meta: {
            title: 'Home'
        },
        component: () => import('../view/Home.vue'),
        redirect: '/index',
        children: [
            {
                path: '/index',
                meta: {
                    title: 'Course'
                },
                component: () => import('../view/Course.vue')
            },
            {
                path: '/user/list',
                name: 'User',
                meta: {
                    title: 'User'
                },
                component: () => import('../view/user/index.vue')
            },
            {
                path: '/user/detail',
                meta: {
                    title: 'User Detail'
                },
                component: () => import('../view/user/Detail.vue'),
            },
            {
                path: 'course/courseForm',
                name: 'courseForm',
                meta: {
                    title: 'Course Form'
                },
                component: () => import('../view/CourseForm/CourseForm.vue'),
            },
            {
                path: '/user/CourseManagement',
                name: 'CourseManagement',
                meta: {
                    title: 'Course Management'
                },
                component: () => import('../view/CourseManagement/CourseManagement.vue'),
                children: [
                    {
                        path: 'course/CourseDetail',
                        name: 'CourseDetail',
                        meta: {
                            title: 'Course Detail'
                        },
                        component: () => import('../view/CourseManagement/CourseDetail.vue'),
                    },
                ]
            },
        ]
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
// 挂载路由导航守卫：to表示将要访问的路径，from表示从哪里来，next是下一个要做的操作
router.beforeEach((to, from, next) => {
    // 修改页面 title
    if (to.meta.title) {
      document.title = 'Course management system - ' + to.meta.title
    }
    // login success
    if (to.path === '/login') {
      return next()
    }
    // get token
    // const token= sessionStorage.getItem('token')
    // if (!token) {
    //   return next('/login')
    // } else {
    //   next()
    // }
    return next()
  })
  
// export router
export default router