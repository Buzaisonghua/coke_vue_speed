// 任务下发
import Layout from '@/layout/index.vue'
const TaskRoutes = [
  {
    path: '/task',
    component: Layout,
    redirect: '/task/un',
    hidden: true,
    name: 'Task',
    meta: {
      title: '任务发布',
      icon: 'task'
    },
    children: [
      {
        path: 'un',
        component: () => import('@/views/taskReleace/un'),
        name: 'TaskUn',
        meta: {
          title: '未发布任务',
          icon: 'nav',
          bread: [
            {
              name: '任务发布',
              path: '/task'
            },
            {
              name: '未发布任务',
              path: '/task/un'
            }
          ]
        }
      },
      {
        path: 'on',
        component: () => import('@/views/taskReleace/on'),
        name: 'TaskOn',
        meta: {
          title: '已发布任务',
          icon: 'device-list',
          bread: [
            {
              name: '任务发布',
              path: '/task'
            },
            {
              name: '已发布任务',
              path: '/task/on'
            }
          ]
        }
      },
      {
        path: 'complete',
        component: () => import('@/views/taskReleace/complete'),
        name: 'TaskComplete',
        meta: {
          title: '已完成任务',
          icon: 'device-list',
          bread: [
            {
              name: '任务发布',
              path: '/task'
            },
            {
              name: '已完成任务',
              path: '/task/complete'
            }
          ]
        }
      },
      {
        path: 'all',
        component: () => import('@/views/taskReleace/all'),
        name: 'TaskAll',
        meta: {
          title: '全部任务',
          icon: 'device-list',
          bread: [
            {
              name: '任务发布',
              path: '/task'
            },
            {
              name: '全部任务',
              path: '/task/all'
            }
          ]
        }
      }
    ]
  }
]
export default TaskRoutes
