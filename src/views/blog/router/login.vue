<!--  -->
<template>
<div class='login'>
  <header>
    仰天大笑出门去
    <br>
    我辈岂是蓬蒿人
  </header>
  <hr>
  <div class="login-box">
    <h3>登录</h3>
    <hr>
    <div class="form-box">
      <el-form :model="loginForm" :rules="rules" ref="ruleForm1" label-width= "auto" class="demo-ruleForm">
        <el-form-item  prop="username">
          <el-input v-model="loginForm.username" placeholder="用户名是你注册时用的手机号哦">
            <template slot="prepend"><i class="el-icon-magic-stick"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item  prop="password">
          <el-input v-model="loginForm.password" show-password placeholder="在这悄悄输入密码哦">
            <template slot="prepend"><i class="el-icon-lock"></i></template>
          </el-input>
        </el-form-item>
        <div style="height: 20px"></div>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm1')">登录</el-button>
          <el-button  id="toLogin" @click="toRegister">没账号？ 注册一个吧 👀</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {handleLogin} from 'network/users.js'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
  loginForm: {
    username: null,
    password: null,
  },
  rules: {
    username: [
      { required: true, message: '手机号不能为空哦', trigger: 'blur' },
      {validator:function(rule,value,callback){
            if(/^1[345789]\d{9}$/.test(value) == false){
                callback(new Error("请输入正确的手机号"));
            }else{
                callback();
            }
        }, trigger: 'blur'}
    ],
    password: [
      { 
        required: true, 
        message: '密码不能为空哦', 
        trigger: 'blur' 
      },
      {
        min: 6,
        max: 30,
        message: '长度在 6 到 30 个字符'
      }, 
      {
        pattern: /^(\w){6,20}$/,
        message: '只能输入6-20个字母、数字、下划线'
      }
    ]
  }
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  submitForm(formName) {
    this.$refs[formName].validate((valid) => {
      if (valid) {
        handleLogin(this.loginForm).then(result => {
          let userInfo = result.data
          console.log(userInfo)
          if(userInfo.errno === 0 ) {
            //说明登录验证成功
            alert(`用户名： ${userInfo.data.nickname}, 权限级别为：${userInfo.data.priority}`)
          }else {
            alert(userInfo.message)
          }
        })

      } else {
        console.log('error submit!!');
        return false;
      }
    });
  },
  toRegister() {
    this.$router.push({
      name: "Register"
    })
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.login {
  header {
    text-align: center;
    color: #333;
    margin: 20px 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;

  }
  hr {
    display: block;
    padding: 0;
    border: 0;
    height: 0;
    border-top: 1px solid #eee;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    margin: 20px 0;
  }
  .login-box {
    width: 700px;
    margin: 0 auto;
    h3 {
      color: #333;
      font-weight: 600;
      -webkit-box-sizing: content-box;
      box-sizing: content-box;
    }
    hr {
      display: block;
      padding: 0;
      border: 0;
      height: 0;
      border-top: 1px solid #eee;
      -webkit-box-sizing: content-box;
      box-sizing: content-box;
      margin: 20px 0;
    }
    .form-box {
      padding: 10px;
    }
  }
}


</style>

<style lang="scss">
  #toLogin.el-button {
    color: #444;
    background-color: #e6e6e6;
    border-color: #e6e6e6; 
    float: right;
    &:hover {
      background-color: #d4d4d4;
    }
  }
</style>