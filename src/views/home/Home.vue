<template>
  <!-- <el-container>
    <el-header>
      <el-row :gutter="20">
        <el-col :span="3">
          <el-image
            style="width: 100%;height:60px;"
            :src="url"
            fit="scale-down"
          ></el-image>
        </el-col>
        <el-col :span="19">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            router
            mode="horizontal"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="/index">首页</el-menu-item>
            <el-menu-item index="/workList">任务列表</el-menu-item>
            <el-menu-item index="/profile">当前任务</el-menu-item>
          </el-menu>
        </el-col>
        <el-col
          :span="2"
          @click.native="logout"
          style="font-size: 14px;text-align:right;cursor:pointer;"
        >
          <i class="el-icon-switch-button"></i>
          <span>退出</span>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <transition name="main" mode="out-in">
        <router-view></router-view>
      </transition>
    </el-main>
  </el-container> -->

  <el-container>
    <layoutAside></layoutAside>
    <el-container class="home_box">
      <layoutHeader></layoutHeader>
      <el-main id="elmain">
        <transition name="main" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
      <el-footer>
        <Bottom></Bottom>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import mix from "./Home-mixins.js";
export default {
  mixins: [mix]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.el-header {
  background-color: #545c64;
  color: #fff;
  height: 60px !important;
  line-height: 60px !important;
}
.home_box {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.el-main {
  background-color: #f0f2f5;
  color: #333;
  flex: 1;
  overflow: auto;
}
.el-menu {
  background: transparent;
  .el-menu-item {
    height: 60px;
    line-height: 60px;
    font-size: 14px;
  }
}
.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background: transparent;
}
.input-with-select {
  /deep/ .el-button--primary {
    color: #fff !important;
    background-color: #409eff !important;
    border-color: #409eff !important;
  }
}
.list_table {
  /deep/ .el-table__row {
    cursor: pointer;
  }
}
</style>
