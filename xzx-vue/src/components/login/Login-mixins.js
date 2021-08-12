import url from '../../assets/logo.png'
export default {
  data () {
    return {
      url,
      PWchecked: false,
      ruleForm: {
        username: '',
        password: ''
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
  created () {
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
    login (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const data = await this.$http.get('user/login', {
            params: this.ruleForm
          })
          if (data.data.code !== '200') return this.$message.error(data.data.message)
          this.$message.success('恭喜你，登录成功')
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
