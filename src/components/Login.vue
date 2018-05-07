<!--html处理结构-->
<template>
  <div class="login">
    <div class="left">
      欢迎来到<br/>数码产品库存<br/>管理系统
    </div>

    <div class="right">
      <p>登录界面</p>
      用户名：<input type="text" size="30px" height="24px"><br/>
      密 &nbsp&nbsp码：<input type="text" size="30px" height="24px"><br/>
      记住密码 <br>
      <button >登录</button><br/>
      <a href=""  >忘记密码？联系管理员</a>
    </div>
  </div>
</template>

<!--Vue正文处理逻辑-->
<script>
  export default {
    name: 'login',
    data () {
      return {
        greet:"欢迎来到"
      }
    }
  }
</script>


<!--css结构样式-->
<style scoped>
  .login{
    width: 100%;
    height: 740px ;
    margin:0 auto;
    background-color: #4C7EC9;
    padding: 10px 60px;
    border: 1px #666666;
    z-index: 5;


  }
  .left {
    width: 630px;
    height:600px;
    float: left;
    position: absolute;
    margin-top: 160px;
    margin-left: 120px;
    overflow-x: hidden;
    overflow-y: auto;
    color: #ffffff;
    font-size: 60px;
  }
  .right {
    width: 400px;
    height:500px;
    border: chartreuse 5px;
    float: right;
    position: absolute;
    margin-top: 160px;
    margin-left: 730px;
    padding: 20px 45px;
    /*overflow-x: hidden;*/
    /*overflow-y: auto;*/
    background-color: #ffffff;
    border: chartreuse 10px;
    border-radius:10px;
    color: #2e0519;

    font-size: 24px;
  }
  p{
    text-align: center;
    font-size: 36px;
  }
  a{
    font-size: 14px;
    text-align: left;
  }
</style>
