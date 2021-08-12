<template>
  <el-container>
    <el-header>
      <el-row :gutter="20">
        <el-col :span="3">
          <el-image style="width: 100%;height:0.6rem;" :src="url" fit="scale-down"></el-image>
        </el-col>
        <el-col :span="15">
          <el-menu :default-active="activeIndex" class="el-menu-demo" router mode="horizontal" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="/index">首页</el-menu-item>
            <el-menu-item index="/workList">任务列表</el-menu-item>
            <el-menu-item index="/profile">当前任务</el-menu-item>
            <!-- <el-menu-item index="/yara">Yara规则</el-menu-item> -->
          </el-menu>
        </el-col>
        <el-col :span="4">
          <el-input placeholder="Md5" v-model="md5Val" class="input-with-select">
            <el-button slot="append" @click="md5ModalBtn" type="primary" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="2" @click.native="logout" style="font-size: 0.14rem;text-align:right;cursor:pointer;">
          <i class="el-icon-switch-button"></i>
          <span>退出</span>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import mix from './Home-mixins.js'
export default {
  mixins: [mix]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.el-header {
  background-color: #545c64;
  color: #fff;
  height: 0.6rem !important;
  line-height: 0.6rem !important;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  min-height: calc(100vh - 0.6rem);
}
.el-menu {
  background: transparent;
  .el-menu-item {
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.14rem;
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
