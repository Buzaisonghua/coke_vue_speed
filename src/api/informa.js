import request from '@/utils/request.js'

// 4.1.信息报送-列表
export function findListByStatus(data) {
    return request({
      url: 'risen/taskDetail/findListByStatus.do',
      method: 'post',
      params: data
    })
}

// 4.2.信息报送-详情
export function showDetial(data) {
    return request({
      url: 'risen/taskDetail/showDetial.do',
      method: 'post',
      params: data
    })
}
  
// 4.3.信息报送-表单填报内容保存
export function showDetial(data) {
    return request({
      url: 'risen/core/flex/modapp/saveAppModel.do',
      method: 'post',
      params: data
    })
}
  
// 4.4.信息报送-上报/保存
export function btnOperation(data) {
    return request({
      url: 'risen/taskDetail/btnOperation.do',
      method: 'post',
      params: data
    })
}

// 4.4.信息报送-上报/保存
export function btnOperation(data) {
    return request({
      url: 'risen/taskDetail/btnOperation.do',
      method: 'post',
      params: data
    })
}