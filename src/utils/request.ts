import axios from 'axios'
import { Message, MessageBox, Loading } from 'element-ui'
import { UserModule } from '@/store/modules/user'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = Base url + request url
  timeout: 8000
  // withCredentials: true // send cookies when cross-domain requests
})

let loadingInstance: any = null
function startLoading() {
  loadingInstance = Loading.service({
    fullscreen: true,
    text: '拼命加载中...',
    background: 'rgba(0, 0, 0, 0.8)'
  })
}
function endLoading() {
  loadingInstance.close()
}
let needLoadingRequestCount = 0
function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}
function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

// Request interceptors
service.interceptors.request.use(
  (config) => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    if (UserModule.token) {
      config.headers['Authorization'] = UserModule.token
      config.headers['uuid'] = UserModule.uuid
      config.headers['platform'] = 1
    }
    if (config.data && !config.data.notLoading) showFullScreenLoading()
    return config
  },
  (error) => {
    tryHideFullScreenLoading()
    Promise.reject(error)
  }
)

// Response interceptors
service.interceptors.response.use(
  (response) => {
    tryHideFullScreenLoading()
    const res = response.data
    // let versions = localStorage.getItem('versions')
    // if (versions !== store.getters.version) {
    //   res.code = 40101
    // }
    if (res.code !== 0) {
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      })
      return response
    }
    if (res.code === 401 || res.code === 402 || res.code === 406 || res.code === 407 || res.code === 408 || res.code === 1012) {
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      })
      // 401    权限不足, 请登录
      // 402    登陆超时,请重新登陆
      // 406    您的信息被修改，请重新登录
      // 407   您的账号被其他人登录，请重新登录
      // 408   登陆状态已过期，请重新登录
      // 请自行在引入 MessageBox
      MessageBox.confirm('您无权访问该功能，可以取消继续留在该页面，或者重新登录', '确定登出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        UserModule.ResetToken()
        location.reload()
      })
      // }
      return Promise.reject(res.msg)
    } else {
      return response
    }
  },
  (error) => {
    tryHideFullScreenLoading()
    if (error.message === 'timeout of 8000ms exceeded') {
      error.message = '网络连接超时'
    }
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
