/**
 * Created by WebStorm.
 * User: xizixin
 * Date: 2022/7/28
 * Description: 文件描述
 */
import axios from "../axios"
import loginUrls from "../urls/login"

export default {
  // 账号密码登陆
  fetchLogin(params) {
    return axios.get(loginUrls.login, { params })
  }
}
