<!--  -->
<template>
<div class='register'>
  <header>
    去哪里不重要
    <br>
    重要的是去啊
  </header>
  <hr>
  <div class="login-box">
    <h3>注册</h3>
    <hr>
    <div class="form-box">
      <el-form :model="registerForm" :rules="rules" ref="ruleForm" label-width= "auto" class="demo-ruleForm">
        <el-form-item  prop="nickname">
          <el-input v-model="registerForm.nickname" placeholder="想好起什么好听的昵称没～">
            <template slot="prepend"><i class="el-icon-user"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item  prop="username">
          <el-input v-model="registerForm.username" placeholder="请输入你的手机号作为用户名～">
            <template slot="prepend"><i class="el-icon-magic-stick"></i></template>
          </el-input>
        </el-form-item>
        <el-form-item  prop="password">
          <el-input v-model="registerForm.password" show-password placeholder="在这悄悄输入密码哦">
            <template slot="prepend"><i class="el-icon-lock"></i></template>
          </el-input>
        </el-form-item>
        <div style="height: 20px"></div>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <el-button  id="toLogin" @click="toLogin">去登陆看看 👀</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {handleRegister} from 'network/users.js'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
  registerForm: {
    username: null,
    password: null,
    nickname: null,
  },
  rules: {
    nickname: [
      {
        required: true,
        message: '昵称不能为空哦',
        trigger: 'blur'
      },
      {
        min: 2,
        max: 10,
        message: '长度在 2 到 10 个字符'
      },
      {
        pattern: /^[\u4E00-\u9FA5]+$/,
        message: '用户名只能为中文'
      }
    ],
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

        handleRegister(this.registerForm).then(result => {
          
          let responseInfo  = result.data
          
          alert(responseInfo.message)
        })
      } else {
        return false;
      }
    });
  },
  toLogin() {
    this.$router.push({
      name: "Login"
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
.register {
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