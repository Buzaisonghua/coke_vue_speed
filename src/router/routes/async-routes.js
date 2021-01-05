/**
 * 需要权限路由
 */
import Layout from '@/layout/index.vue'
import Page from '@/layout/page.vue'
const asyncRoutes = [
  /* 表单 */
  {
    path: '/form',
    component: Page,
    hidden: false,
    children: [
      {
        // 新建模板
        path: 'setNewTemplate',
        component: () => import('@/views/power/form/setNewTemplateForm.vue'),
        meta: {
          title: '新建模板'
        }
      },
      {
        // 模板处理
        path: 'templateDetails',
        component: () => import('@/views/power/form/templateDetalisForm.vue'),
        meta: {
          title: '模板处理'
        }
      },
      {
        // 下发任务
        path: 'addTask',
        component: () => import('@/views/taskReleace/new/addTask.vue'),
        meta: {
          title: '下发任务'
        }
      },
      {
        // 下发任务处理页面
        path: 'taskDetails',
        component: () => import('@/views/taskReleace/details'),
        meta: {
          title: '任务处理'
        }
      },
      {
        // 下发任务未发布任务详情
        path: 'taskDetailsUn',
        component: () => import('@/views/taskReleace/details/un'),
        meta: {
          title: '未发布任务详情'
        }
      },
      {
        // 下发任务已发布任务详情
        path: 'taskDetailsOn',
        component: () => import('@/views/taskReleace/details/on'),
        meta: {
          title: '已发布任务详情'
        }
      },
      {
        // 下发任务已完成任务详情
        path: 'taskDetailsOk',
        component: () => import('@/views/taskReleace/details/ok'),
        meta: {
          title: '已完成任务详情'
        }
      },
      {
        // 下发任务未完成任务单位详情
        path: 'unDetails',
        component: () => import('@/views/taskReleace/details/components/UnDetails'),
        meta: {
          title: '上报详情'
        }
      }
    ]
  }
]

export const asyncConfig = [
  /* 权限配置 */
  {
    path: '/config',
    component: Layout,
    defaultKey: 'Config',
    children: [
      {
        path: 'index',
        component: () => import('@/views/configuraction'),
        name: 'Config',
        hidden: true,
        meta: {
          title: '权限配置',
          icon: 'config',
          bread: [
            {
              name: '权限配置',
              path: '/config'
            }
          ]
        }
      }
    ]
  }
]
export default asyncRoutes
