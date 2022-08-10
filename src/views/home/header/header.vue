<template>
  <el-header>
    <el-row type="flex" justify="space-between">
      <el-col>
        <!-- <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          router
          mode="horizontal"
        >
          <el-menu-item index="/index">首页</el-menu-item>
          <el-menu-item index="/workList">任务列表</el-menu-item>
          <el-menu-item index="/profile">当前任务</el-menu-item>
        </el-menu> -->
        <i class="el-icon-s-fold" @click="collapse"></i>
      </el-col>
      <el-col style="font-size: 15px;text-align:right;">
        <span style="cursor:pointer;" @click="logout">
          <i class="el-icon-switch-button"></i>
          <span>退出</span>
        </span>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: ""
    };
  },
  methods: {
    collapse() {
      this.$store.dispatch("collapse");
    },
    logout() {
      this.$confirm("确定要退出吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功!"
          });
          sessionStorage.clear();
          this.$router.push({ path: "/login" });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }

    // successCallback () {
    //   this.dialogInfoVisible = false
    // },
    // editPwdCallback () {
    //   this.dialogPassVisible = false
    // },
  }
};
</script>

<style lang="less">
.el-header {
  background-color: #545c64;
  color: #fff;
  flex-basis: 60px;
  height: 60px !important;
  line-height: 60px !important;
}
.el-icon-s-fold {
  font-size: 1.6em;
  line-height: 0.75em;
  vertical-align: -15%;
  cursor: pointer;
}
// .el-menu {
//   background: transparent;
//   .el-menu-item {
//     color: rgba(255, 255, 255, 0.7);
//     height: 60px;
//     line-height: 60px;
//     font-size: 14px;
//   }
// }
// .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
// .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
// .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
//   background: transparent;
//   color: #fff;
// }
// .el-menu--horizontal>.el-menu-item.is-active{
//   color: #fff;
// }
</style>
