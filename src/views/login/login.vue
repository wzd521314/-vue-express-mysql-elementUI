<template>
  <div id="login">
    <div class="login-box">
      <p>Login</p>
      <form class="form" action="http://localhost:8001/" method="post">
        <div class="item"><i class="fa fa-user fa-lg" aria-hidden="true"></i><input type="text" name="username" id="username" placeholder="username"></div>
        <div class="item"><i class="fa fa-key fa-lg" aria-hidden="true"></i><input type="text" name="password" id="password" placeholder="password"></div>
        <button type="button">登录</button>
      </form>
    </div>
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'About',
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
  //这里存放数据
  return {

  };
  },
}
</script>
<style>
@import "../../assets/css/base.css";

html, body{
  height: 100%;
}

#login{
  position: relative;
  height: 100%;
  background: url('~assets/img/login.jpg') no-repeat;
  background-position: center center;
  text-align: center;
}

.login-box{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 25%;
  height: 35%;
  min-width: 300px;
  min-height: 250px;
  background-color: #00000030;
}

.login-box p{
  margin-top: 20px;
  margin-bottom: 35px;
  font-size: 30px;
  font-weight: 800;
  color:white;
}

.form .item{
  margin-bottom: 13px;
}

.form .item i{
  color: #fff;
  margin-right: 10px;
}

.form button{
  font-size: 20px;
  width: 50%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: none;
  border-radius: 30px;
  margin-top: 20px;
  background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
  color: #fff;
  font-weight: 700;
}

.form input{
  width: 50%;
  padding: 5px 10px;
  border: 0;
  border-bottom: 2px solid #fff;
  background-color: #ffffff00;
  color: #fff;
}

.form input::-webkit-input-placeholder{
  color:#fff;
}

</style>
