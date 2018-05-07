<template>
  <div id="app">
    <!-- 头部导航 -->
    <header class="header" :class="{ 'header-fixed' : headerFixed }">

      <el-row>
          <!--<el-col>-->
        <el-col :span="30">
          <!--<el-menu  class="el-menu-demo" mode="horizontal" @select="">-->

            <!--<el-menu-item index="1"><strong><b >欢迎来到数码产品仓库管理系统</b></strong></el-menu-item>-->


          <!--</el-menu>-->
          <el-col :span="24" class="header">
            <el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
              {{collapsed?'':sysName}}
              <el-card class="box-card">
                <div  class="text item">
                  欢迎登陆数码产品仓库管理系统
                </div>
              </el-card>

            </el-col>
            <el-col :span="10">
              <div class="tools" @click.prevent="collapse">
                <i class="fa fa-align-justify"></i>
              </div>
            </el-col>
            <el-col :span="4" class="userinfo">
              <el-dropdown trigger="hover">
                <span class="el-dropdown-link userinfo-inner"><img src="/assets/logo.png"  /> {{sysUserName}}</span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item divided @click.native="User">设置</el-dropdown-item>
                  <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>

                </el-dropdown-menu>

              </el-dropdown>

            </el-col>
          </el-col>

        </el-col>
      </el-row>
    </header>
    <!--<div style="position: relative;height: 60px;width: 100%;"></div>-->
    <main>
      <!-- 左侧导航 -->
      <div class="main-left">
        <el-menu  class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/InW" :class="{'isActive': active}"><i class="el-icon-download"></i>入库管理</el-menu-item>
          <el-menu-item index="/OutW" :class="{'isActive': !active}"><i class="el-icon-upload2"></i>出库管理</el-menu-item>
          <el-menu-item index="/WM" :class="{'isActive': active}"><i class="el-icon-setting"></i>仓库管理</el-menu-item>
          <el-menu-item index="/Statistic" :class="{'isActive': !active}"><i class="el-icon-tickets"></i>统计</el-menu-item>
          <el-menu-item index="/Alarm" :class="{'isActive': active}"><i class="el-icon-warning"></i>警报管理</el-menu-item>


          <el-submenu index="">
            <template slot="title"><i class="el-icon-info"></i>用户管理</template>
            <el-menu-item index="/User" class="xiugai1"><small>修改用户信息</small></el-menu-item>
            <el-menu-item index="/User1" class="xiugai1"><small>添加用户</small></el-menu-item>
          </el-submenu>

          <el-menu-item index="/HelloWorld" :class="{'isActive': active}"><i class="el-icon-question"></i>帮助</el-menu-item>

        </el-menu>
      </div>
      <!-- 右侧主内容区 -->
      <div class="main-right" >
        <router-view class="view"></router-view>
      </div>
    </main>
  </div>

</template>
<script>
  import Vue from 'vue'
  import Element from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  Vue.use(Element)
  export default {
    name: 'app',
    data: function (){
      return {
        active:true,
        Inw:'入库管理',
      }
    },
    methods:{
      logout: function () {
        var _this = this;
        this.$confirm('确认退出吗?', '提示', {
          //type: 'warning'
        }).then(() => {
          sessionStorage.removeItem('user');
          _this.$router.push('/login');
        }).catch(() => {

        });


      },
      User:function () {
        var _this = this;
        this.$confirm('确认修改个人信息?', '提示', {
          //type: 'warning'
        }).then(() => {

          _this.$router.push('/User');
        }).catch(() => {

        });
      }
    }
  }
</script>
<style>
  *{
    margin: 0px;
    padding: 0px;
  }
  body{margin: 0;}
  #app {
    min-width: 1200px;
    margin: 0 auto;
    font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
  }
  /* 头部导航 */
  header{z-index: 1000;min-width: 1200px;transition: all 0.5s ease;  background-color: #fff; box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04); }
  header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
  header .el-menu-demo{padding-left: 20px!important;padding-top: 0px; font-size:36px}
  /* 主内容区 */
  main{ display: -webkit-box; display: -ms-flexbox; display: flex; min-height: 800px; border: solid 40px #E9ECF1; background-color: #FCFCFC; }
  main .main-left{text-align: left;width: 200px;float: left; font-family: PingFang SC}
  main .main-right{-webkit-box-flex: 1; -ms-flex: 1; flex: 1; background-color: #fff; padding: 50px 70px; }
  main .el-menu{background-color: transparent!important;}
  header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
  .userinfo {
    text-align: right;
    padding-right: 35px;
    float: right;}

  .userinfo-inner {
    cursor: pointer;
    color:#fff;}
  img {
    width: 50px;
    height: 50px;
    border-radius: 20px;
    margin: 30px 90px 10px 10px;
    float: right;
  }
  .text {
    font-size: 34px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 1800%;
  }

</style>
