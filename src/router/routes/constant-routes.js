/**
* 通用路由
*/
import Layout from '@/layout/index.vue'
const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    name: 'Login',
    meta: { title: '登录' }
  },
  {
    path: '/404',
    component: () => import('@/views/error/404'),
    name: '404',
    meta: { title: '404' }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        hidden: true,
        path: 'home',
        component: () => import('@/views/home/index'),
        name: 'Home',
        meta: { title: '首页', icon: 'home', bread: [{ name: '首页', path: '/home' }] }
      }
    ]
  }
]

export default constantRoutes
