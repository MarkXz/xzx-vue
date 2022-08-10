<template>
  <div>
    <el-aside id="asideNav">
      <div class="logo-name">
        <p v-if="$store.getters.logoShow">XI</p>
        <p v-else>
          <el-image
            style="width: 100%;height:100%;vertical-align:middle"
            :src="require('@/assets/logo.png')"
            fit="scale-down"
          ></el-image>
        </p>
      </div>
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical"
        :collapse="$store.getters.isCollapse"
        background-color="#03152A"
        text-color="rgba(255,255,255,.7)"
        active-text-color="#ffffff"
        router
        unique-opened
        collapse-transition
      >
        <template v-for="(item, index) in $store.getters.addRouters">
          <el-submenu
            v-if="item.children && item.children.length > 0"
            :index="index + ''"
            :key="index"
          >
            <template slot="title">
              <i :class="item.iconCls"></i>
              <span slot="title">{{ item.name }}</span>
            </template>

            <menuTree :menuData="item.children"></menuTree>
          </el-submenu>
          <el-menu-item :index="item.path" v-else :key="item.path">
            <i :class="item.iconCls"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
import menuTree from "./menuTree";

export default {
  name: "asideNav",
  components: {
    menuTree
  }
};
</script>

<style lang="less">
@top: top;
@bottom: bottom;
@left: left;
@right: right;
#w100 {
  width: 100%;
}

#h100 {
  height: 100%;
}

#cursor {
  cursor: pointer;
}

// @mixin set-value($side, $value) {
//   @each $prop in $leftright {
//     #{$side}-#{$prop}: $value;
//   }
// }

#asideNav {
  width: auto !important;
  height: 100%;
  display: flex;
  flex-direction: column;
  // border-right: solid 1px #e6e6e6;
  .logo-name {
    background-color: #03152a !important;
    &:extend(#w100);
    font-weight: 300;
    z-index: 999;
    p {
      height: 60px;
      line-height: 60px;
      overflow: hidden;
      text-align: center;
      font-size: 16px;
      color: #5e6d82;
    }
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    &:extend(#h100);
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .el-menu {
    flex: 1;
    overflow: inherit;
    border-right: none;
    &::-webkit-scrollbar {
      display: none;
    }
    .fa {
      vertical-align: middle;
      margin-right: 5px;
      width: 24px;
      text-align: center;
      font-size: 18px;
    }
    .el-menu-item {
      background-color: #020f1d !important;
      border-bottom: 1px solid #020f1d;
      &:hover {
        color: #ffffff !important;
        background-color: #375573 !important;
      }
    }
    .el-menu-item.is-active {
      background-color: #56a9ff !important;
    }
    .is-opened > .el-submenu__title > .el-icon-arrow-down {
      color: #ffffff;
      font-weight: 500;
      font-size: 18px;
    }
  }
}
</style>
