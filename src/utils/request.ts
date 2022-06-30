import axios from 'axios'

const request = axios.create({
  baseURL: 'https://www.fastmock.site/mock/4d620904cf6297b2686e07189f333224/api',
})

const err = (error: any) => {
  if (error.response) {
    const data = error.response.data

    if (error.response.status === 403)
      console.warn('服务器403啦，要重新登录！')

    if (error.response.status === 404)
      console.warn('接口不存在！')

    if (error.response.status === 500)
      console.warn('接口500！')

    if (error.response.status === 401 && !(data.result && data.result.isLogin))
      console.warn('接口403无权限！')
  }
  return Promise.reject(error)
}

/**
 * response interceptor
 * 所有请求统一返回
 */
request.interceptors.response.use((response) => {
  return new Promise((resolve, reject) => {
    console.warn('response interceptor', response.data)
    const { success, message } = response.data
    if (success)
      resolve(response.data)

    else
      reject(message)
  })
}, err)

export default request
