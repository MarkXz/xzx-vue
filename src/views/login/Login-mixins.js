import url from '../../assets/logo.png'
export default {
  data() {
    return {
      url,
      PWchecked: false,
      ruleForm: {
        username: 'xzx',
        password: '123'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  created() {
    if (localStorage.getItem('userInfo')) {
      if (JSON.parse(localStorage.getItem('userInfo')).isChecked) {
        this.PWchecked = JSON.parse(localStorage.getItem('userInfo')).isChecked
        this.ruleForm = {
          username: JSON.parse(localStorage.getItem('userInfo')).username,
          password: JSON.parse(localStorage.getItem('userInfo')).password
        }
      }
    }
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // const data = await this.$http.get('user/login', {
          //   params: this.ruleForm
          // })

          this.$store.dispatch("setToken", this.ruleForm.username).then(() => {
            this.$router.push({path: "/"})
          }).catch(res => {
            this.$message({
              showClose: true,
              message: res,
              type: "error"
            })
          })


          return
          const data = await this.$http.fetchLogin({
            pageNumber: '1',
            pageSize: '5'
          })
          if (data.data.code !== '200') return this.$message.error(data.data.message)
          this.$message.success('恭喜你，登录成功')

          // 将 username 设置为 token 存储在 store，仅为测试效果，实际存储 token 以后台返回为准
          // that.$store.dispatch("setToken", that.loginForm.username).then(() => {
          //   that.$router.push({path: "/"})
          // }).catch(res => {
          //   that.$message({
          //     showClose: true,
          //     message: res,
          //     type: "error"
          //   })
          // })


          sessionStorage.setItem('token', 'Bearer ' + data.data.token)
          sessionStorage.setItem('userName', this.ruleForm.username)
          sessionStorage.setItem('userId', data.data.user_id)
          // if (this.ruleForm.username === 'superadmin') {
          //   sessionStorage.setItem('isAdmin', '1')
          // } else {
          //   sessionStorage.setItem('isAdmin', '')
          // }
          if (this.PWchecked) {
            localStorage.setItem('userInfo', JSON.stringify({
              username: this.ruleForm.username,
              password: this.ruleForm.password,
              isChecked: this.PWchecked
            }))
          } else {
            localStorage.removeItem('userInfo')
          }
          sessionStorage.setItem('activePath', '/index')
          this.$router.push({ path: '/index' })
        } else {
          console.log('校验失败')
          return false
        }
      })
    }
  }
}
