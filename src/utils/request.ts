import axios from 'axios'

const request = axios.create({
  baseURL: 'https://www.fastmock.site/mock/4d620904cf6297b2686e07189f333224/api',
  // baseURL: 'http://10.0.3.236:3001',
})

const err = (error: any) => {
  if (error.response) {
    const data = error.response.data

    if (error.response.status === 403)
      ElMessage('服务器403啦，要重新登录！')

    if (error.response.status === 404)
      ElMessage.error('接口不存在！')

    if (error.response.status === 500)
      ElMessage.error('接口500！')

    if (error.response.status === 401 && !(data.result && data.result.isLogin))
      ElMessage.error('接口403无权限！')
  }
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use((config: any) => {
  const token = vls.get(ACCESS_TOKEN)
  if (token)
    config.headers.Authorization = `Bearer ${token}`

  return config
}, err)

/**
 * response interceptor
 * 所有请求统一返回
 */
request.interceptors.response.use((response) => {
  return new Promise((resolve, reject) => {
    const { success, msg } = response.data
    if (success) {
      resolve(response.data)
    }

    else {
      ElMessage.error('接口403无权限！')
      reject(msg)
    }
  })
}, err)

export default request
