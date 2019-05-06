<template>
  <div class="login">

    <div class="my-form">
        <h2>用户登录</h2>
      <el-form label-position="top">
        <el-form-item label="用户名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="my-btn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  .login {
    height: 100%;
    background: #324152;
    display: flex;
    justify-content: center;
    align-items: center;
    .my-form{
        background: white;
        width: 560px;
        height: 360px;
        padding: 50px 35px;
        box-sizing: border-box;
        border-radius: 10px;
        h2{
            margin: 0;
            padding: 0;
            text-align: center;
        }
        .my-btn{
            width: 100%;
        }
    }
  }
}
</style>
