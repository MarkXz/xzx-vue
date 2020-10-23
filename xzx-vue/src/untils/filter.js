/*
* @Author: xizixin
* @Describe: filter
* @Date: 2018-06-22
*/
// 时间的全局过滤器
const dataForm = originVal => {
  const data = new Date(originVal)
  const y = data.getFullYear()
  const m = (data.getMonth() + 1 + '').padStart(2, '0')
  const d = (data.getDate() + '').padStart(2, '0')
  const hh = (data.getHours() + '').padStart(2, '0')
  const mm = (data.getMinutes() + '').padStart(2, '0')
  const ss = (data.getSeconds() + '').padStart(2, '0')
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
export default [{
  name: 'dataForm',
  fn: dataForm
}]
