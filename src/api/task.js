import request from '@/utils/request.js'

// 任务发布-下发任务（流程操作按钮）
export function findCmdsByNode(data) {
  return request({
    url: '/risen/taskPublish/findCmdsByNode.do',
    method: 'post',
    params: data
  })
}

// 任务发布-下发任务
export function doWorkFlowModelExecute(data) {
  return request({
    url: 'risen/taskPublish/doWorkFlowModelExecute.do',
    method: 'post',
    params: data
  })
}

// 3.3.任务发布-任务列表
export function findListByStatus(data) {
  return request({
    url: 'risen/taskPublish/findListByStatus.do',
    method: 'post',
    params: data
  })
}

// 任务发布-模板列表
export function templateListApiByOrg(data) {
  return request({
    url: 'risen/template/templateListApiByOrg.do',
    method: 'post',
    params: data
  })
}

// 任务发布-任务列表
export function dictCombo() {
  const data = {
    uuid: '/DICT/YWXT/RWFB',
    type: 'jsn'
  }
  return request({
    url: 'risen/pub/dictCombo.action',
    method: 'post',
    params: data
  })
}

// 3.5 任务发布-任务详情列表
export function showtaskDetialsList(data) {
  return request({
    url: 'risen/taskDetail/showtaskDetialsList.do',
    method: 'post',
    params: data
  })
}

// 3.6 任务发布-任务详情列表
export function showDetial(data) {
  return request({
    url: 'risen/taskDetail/showDetial.do',
    method: 'post',
    params: data
  })
}

// 任务发布-审批记录
export function showListbyShStatus(data) {
  return request({
    url: '/risen/taskDetail/showListbyShStatus.do',
    method: 'post',
    params: data
  })
}

// 共享库-下发共享详情
export function detailTaskShareList(data) {
  return request({
    url: '/risen/taskShare/detailTaskShareList.do',
    method: 'post',
    params: data
  })
}

// 7.2.待办事项-详情
export function showDetialUn(data) {
  return request({
    url: 'risen/taskPublish/showDetial.do',
    method: 'post',
    params: data
  })
}

// 6.4.共享库-填报详情
export function taskFillInDetail(data) {
  return request({
    url: 'risen/taskShare/taskFillInDetail.do',
    method: 'post',
    params: data
  })
}

