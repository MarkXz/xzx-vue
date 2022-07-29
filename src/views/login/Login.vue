<template>
  <div class="main">
    <el-card>
      <div class="systemName">
        <el-image :src="url" fit="scale-down"></el-image>
        <div>后台管理系统</div>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input v-model.trim="ruleForm.username" @keydown.enter.native="login('ruleForm')" placeholder="请输入用户名" round prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model.trim="ruleForm.password" @keydown.enter.native="login('ruleForm')" placeholder="请输入密码" round show-password prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
      </el-form>
      <el-row type="flex" justify="start" class="save_pw">
        <el-checkbox v-model="PWchecked">记住密码</el-checkbox>
      </el-row>
      <el-row>
        <el-button @click="login('ruleForm')" round type="primary">登录</el-button>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import mix from './Login-mixins.js'
export default {
  mixins: [mix]
}
</script>

<style scoped lang="less">
.main {
  height: 100vh;
  background: url('../../assets/bg.jpg') no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-button {
  width: 100%;
}
.systemName {
  color: #fff;
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 20px;
}
.el-card {
  background: transparent;
  border: 0;
  box-shadow: 0 0 0 0;
  text-align: center;
}
.el-input {
  /deep/ .el-input__inner {
    background: transparent;
    border-radius: 20px;
    color: #fff;
  }
  /deep/ input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-transition-delay: 9999999999s !important;
    -webkit-transition: color 9999999999s ease-out, background-color 9999999999s ease-out;
  }
}
.save_pw {
  margin-bottom: 10px;
  .el-checkbox {
    color: rgb(180, 180, 180);
  }
}
</style>
