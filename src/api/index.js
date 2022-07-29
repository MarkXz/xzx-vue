/**
 * Created by WebStorm.
 * User: xizixin
 * Date: 2022-07-28
 * Description: 文件描述
 */
const modulesFiles = require.context("./apis", true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const value = modulesFiles(modulePath)
  modules = Object.assign(modules, value.default)
  return modules
}, {})

export default modules
