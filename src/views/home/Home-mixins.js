import Img from '../../assets/logo.png'
export default {
  name: 'Home',
  data () {
    return {
      activeIndex: '',
      url: Img,
      md5Val: '',
      modelTableList: [],
      tableDialog: false
    }
  },
  created () {
    // if (!sessionStorage.getItem('token')) {
    //   this.$router.push('/login')
    // }
    this.activeIndex = sessionStorage.getItem('path') ? sessionStorage.getItem('path') : '/index'
  },
  watch: {
    $route (to, from) {
      this.activeIndex = to.path
      sessionStorage.setItem('path', to.path)
    }
  },
  methods: {
    logout () {
      this.$confirm('确定要退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
        sessionStorage.clear()
        this.$router.push({ path: '/login' })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    },
    async md5ModalBtn () {
      if (!this.md5Val.trim()) {
        return this.$message({
          type: 'error',
          message: '请输入搜索内容'
        })
      }
      const data = await this.$http.post('v1/analysis/tasks/md5_task_id/', {
        md5_filter: [this.md5Val.trim()]
      })
      this.modelTableList = data.data.message.result
      this.tableDialog = true
    },
    modelRowClick (e) {
      this.tableDialog = false
      let routerJump = this.$router.resolve({ path: '/detailWork', query: { task_id: e.task_id } })
      window.open(routerJump.href, '_blank')
    }
  }
}
