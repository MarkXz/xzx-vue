/*
* @Author: xizixin
* @Describe: Request interaction
* @Date: 2018-06-22
*/
import axios from 'axios'

const isTrue = true // true 线上 false 测试
if (isTrue) {
  axios.defaults.baseURL = ''
} else {
  axios.defaults.baseURL = ''
}
axios.interceptors.request.use(config => {
  // // 为请求头添加token值
  // config.headers.Authorization = window.sessionStorage.getItem('token')
  // console.log(config)
  return config
})
// 响应拦截器
axios.interceptors.response.use(config => {
  return config
})

export default axios
