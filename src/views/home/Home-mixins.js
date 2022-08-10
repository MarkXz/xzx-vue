
import layoutAside from "./aside/aside";
import layoutHeader from "./header/header";
import Bottom from "./Footer/bottom";

export default {
  name: "layout",
  components: {
    layoutHeader,
    Bottom,
    layoutAside
  }
};


// import Img from '../../assets/logo.png'
// export default {
//   name: 'Home',
//   data () {
//     return {
//       activeIndex: '',
//       url: Img,
//       md5Val: '',
//       modelTableList: [],
//       tableDialog: false
//     }
//   },
//   created () {
//     // if (!sessionStorage.getItem('token')) {
//     //   this.$router.push('/login')
//     // }
//     this.activeIndex = sessionStorage.getItem('path') ? sessionStorage.getItem('path') : '/index'
//   },
//   watch: {
//     $route (to, from) {
//       this.activeIndex = to.path
//       sessionStorage.setItem('path', to.path)
//     }
//   },
//   methods: {
//     logout () {
//       this.$confirm('确定要退出吗?', '提示', {
//         confirmButtonText: '确定',
//         cancelButtonText: '取消',
//         type: 'warning'
//       }).then(() => {
//         this.$message({
//           type: 'success',
//           message: '退出成功!'
//         })
//         sessionStorage.clear()
//         this.$router.push({ path: '/login' })
//       }).catch(() => {
//         this.$message({
//           type: 'info',
//           message: '已取消退出'
//         })
//       })
//     }
//   }
// }
