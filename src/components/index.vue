<template>
  <el-container class="my-container">
    <el-header class="my-header">
      <el-row>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <img
              class="my-img"
              src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3460591167,4017978034&fm=26&gp=0.jpg"
              alt
            >
          </div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light">电商后台管理系统</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">
            <el-button type="danger" class="my-btn" plain>退出按钮</el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" class="my-aside">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
            router
        >
        <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="users">
                   <i class="el-icon-menu"></i>
                   用户列表
            </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="roles">
                   <i class="el-icon-menu"></i>
                   角色列表
            </el-menu-item>
            <el-menu-item index="rights">
                   <i class="el-icon-menu"></i>
                  权限列表
            </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="goods">
                   <i class="el-icon-menu"></i>
                   商品列表
            </el-menu-item>
            <el-menu-item index="params">
                   <i class="el-icon-menu"></i>
                  分类参数
            </el-menu-item>
            <el-menu-item index="categories">
                   <i class="el-icon-menu"></i>
                  商品分类
            </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="orders">
                   <i class="el-icon-menu"></i>
                  订单列表
            </el-menu-item>
            
        </el-submenu>
        <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="reports">
                   <i class="el-icon-menu"></i>
                  数据列表
            </el-menu-item>
           
        </el-submenu>
         
        </el-menu>
      </el-aside>
      <el-main class="my-main">
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index"
};
</script>

<style lang="scss">
.my-container {
  height: 100%;
  .my-header {
    background: #bbccdd;
    .my-img {
      height: 60px;
    }
    .bg-purple-light {
      font-size: 30px;
      color: white;
      text-align: center;
      line-height: 55px;
    }
    .my-btn {
        margin-top: 10px;
    }
  }
  .my-aside {
    background: skyblue;
  }
  .my-main {
    background: #eeeeff;
  }
}
</style>
