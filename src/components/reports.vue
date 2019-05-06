<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="my-item">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>数据统计</el-breadcrumb-item>
      <el-breadcrumb-item>数据报表</el-breadcrumb-item>
     
    </el-breadcrumb>
    <img src="../assets/55.gif" alt="">
  </div>
</template>

<script>
export default {
  name: "users",
  
   
};
</script>

<style lang="scss">
    .my-item{
        height: 50px;
        background: #d3dce6;
        line-height: 50px;
        padding-left: 10px;
    }
</style>
