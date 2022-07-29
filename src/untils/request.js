/*
* @Author: xizixin
* @Describe: Request interaction
* @Date: 2018-06-22
*/
// import axios from 'axios'
// axios.defaults.baseURL = '/api'
// axios.interceptors.request.use(config => {
//   // // 为请求头添加token值
//   // config.headers.Authorization = window.sessionStorage.getItem('token')
//   // console.log(config)
//   return config
// })
// // 响应拦截器
// axios.interceptors.response.use(config => {
//   return config
// })

// export default axios


const modulesFiles = require.context("../api/apis", true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const value = modulesFiles(modulePath)
  modules = Object.assign(modules, value.default)
  return modules
}, {})

export default modules
