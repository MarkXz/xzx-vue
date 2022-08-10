<template>
  <div>
    <template v-for="(child, i) in menuData">
      <el-submenu
        v-if="child.children && child.children.length > 0"
        :index="child.path"
        :key="child.path"
      >
        <template slot="title">
          <i :class="child.iconCls"/>
          <span slot="title">{{ child.name }}</span>
        </template>
        <menuTree :menuData="child.children" />
      </el-submenu>

      <el-menu-item :index="child.path" v-else :key="i">
        <i :class="child.iconCls"/>
        <span slot="title">{{ child.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: "menuTree",
  props: ["menuData"]
};
</script>
