const file = {
  ROOTURL: 'http://60.191.64.3:8650', // 开发环境附件预览
  PREVIEWURL: 'http://60.191.64.3:8087/yl', // 开发环境附件预览
  MARKTEXT: '办会系统'
}

// 文件下载
export function downLoad(uuid) {
  return `${file.ROOTURL}/public/meeting/loadFile.do?CMD=DF&uuid=${uuid}`
}

// 预览--走接口--新窗口打开
export function pdf(uuid, type) {
  const file_url = encodeURIComponent(
    encodeURIComponent(`${file.ROOTURL}/public/meeting/loadFile.do?CMD=DF&uuid=${uuid}`)
  )
  return `${file.PREVIEWURL}/public/risen/core/resrc/view/pdf_view.html.do?strMap.remote_url=${file_url}&markText=${file.MARKTEXT}&strMap.ext=${type}`
}

// 预览--页面img-src显示
export function fileSrc(uuid) {
  return `${file.ROOTURL}/public/meeting/loadFile.do?CMD=DF&uuid=${uuid}`
}
