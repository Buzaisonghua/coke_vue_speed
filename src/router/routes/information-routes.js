// 信息报送
import Layout from '@/layout/index.vue'
const TaskRoutes = [
  {
    path: '/information',
    component: Layout,
    redirect: '/information/loading',
    hidden: true,
    name: 'Information',
    meta: {
      title: '信息报送',
      icon: 'task'
    },
    children: [
      {
        path: 'loading',
        component: () => import('@/views/Information/loading'),
        name: 'InformationLoading',
        meta: {
          title: '待上报',
          icon: 'nav',
          bread: [
            {
              name: '信息报送',
              path: '/information'
            },
            {
              name: '待上报',
              path: '/information/loading'
            }
          ]
        }
      },
      {
        path: 'complete',
        component: () => import('@/views/Information/complete'),
        name: 'InformationComplete',
        meta: {
          title: '已上报',
          icon: 'nav',
          bread: [
            {
              name: '信息报送',
              path: '/information'
            },
            {
              name: '已上报',
              path: '/information/complete'
            }
          ]
        }
      },
      {
        path: 'back',
        component: () => import('@/views/Information/back'),
        name: 'InformationBack',
        meta: {
          title: '已退回',
          icon: 'nav',
          bread: [
            {
              name: '信息报送',
              path: '/information'
            },
            {
              name: '已退回',
              path: '/information/back'
            }
          ]
        }
      },
      {
        path: 'all',
        component: () => import('@/views/Information/all'),
        name: 'InformationAll',
        meta: {
          title: '全部',
          icon: 'nav',
          bread: [
            {
              name: '信息报送',
              path: '/information'
            },
            {
              name: '已退回',
              path: '/information/all'
            }
          ]
        }
      }
    ]
  }
]
export default TaskRoutes
