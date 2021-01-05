// 模板管理
import Layout from '@/layout/index.vue'
const PowerRoutes = [
  {
    path: '/power',
    component: Layout,
    redirect: '/power/index',
    defaultKey: 'Power',
    children: [
      {
        path: 'index',
        component: () => import('@/views/power'),
        name: 'Power',
        hidden: true,
        meta: {
          title: '模板管理',
          icon: 'power',
          bread: [
            {
              name: '模板管理',
              path: '/home'
            }
          ]
        }
      }
    ]
  }
]
export default PowerRoutes
