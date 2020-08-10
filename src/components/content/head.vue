<!--  -->
<template>
<div class='header'>
  <el-row type="flex" justify="space-between">
    <el-col :span="6" :xs="12" class="logo">
      <a @click="mainClick">酷狗君の博客</a>
    </el-col>
    <el-col :span="4" class="menu_bar hidden-sm-and-up">
      <button class="button" @click="isShowMenu = !isShowMenu"><i class="fa fa-bars" aria-hidden="true"></i></button>
    </el-col>
    <el-col :span="15" class="nav hidden-xs-only">
      <ul @click = "navbarClick">
        <li>
          <i class="el-icon-aim"></i>
          <a  data-path="Home"> 首页</a>
        </li>
        <li>
          <i class="el-icon-folder-opened"></i>
          <a  data-path="Archive"> 归档</a>
        </li>
        <li>
          <i class="el-icon-collection-tag"></i>
          <a  data-path="Categories"> 分类</a>
        </li>
        <li>
          <i class="el-icon-present"></i>
          <a  data-path="Update"> 更新</a>
        </li>
        <li>
          <i class="el-icon-magic-stick"></i>
          <a  data-path="About"> 关于我</a>
        </li>
      </ul>
    </el-col>
    <el-col :span="5" class="hidden-xs-only login">
      <div class="author" v-if="isLogin">
        <el-button type="primary" size="small" @click="loginClick">登录</el-button>
        <el-button type="primary" size="small" @click="registerClick">注册</el-button>
      </div>
      <div class="author username" v-else>
        <el-dropdown @command="handleCommand">
          <div>
            <span>{{username}}</span>
            <span><i class="el-icon-caret-bottom"></i></span>
          </div>  
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a" icon="el-icon-edit">新建博客</el-dropdown-item>
            <el-dropdown-item command="b" disabled icon="el-icon-user-solid">用户中心</el-dropdown-item>
            <el-dropdown-item command="c" icon="el-icon-switch-button">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>
  </el-row>

  <div class="menu_drop" :style="{'overflow': 'hidden',  'max-height': (isShowMenu? '500px' : '0')}">
    <ul @click = "navbarClick">
        <li>
          <i class="el-icon-aim"></i>
          <a  data-path="Home">首页</a>
        </li>
        <li>
          <i class="el-icon-folder-opened"></i>
          <a  data-path="Archive">归档</a>
        </li>
        <li>
          <i class="el-icon-collection-tag"></i>
          <a  data-path="Categories">分类</a>
        </li>
        <li>
          <i class="el-icon-present"></i>
          <a  data-path="Update">更新</a>
        </li>
        <li>
          <i class="el-icon-magic-stick"></i>
          <a  data-path="About">关于我</a>
        </li>
    </ul>
    <div  v-if="isLogin" class="login">
      <el-button type="primary" size="small" @click="loginClick">登录</el-button>
      <el-button type="primary" size="small" @click="registerClick">注册</el-button>
    </div>
    <div  v-else class="login">
      <el-dropdown @command="handleCommand">
        <div>
          <span>{{username}}</span>
          <span><i class="el-icon-caret-bottom"></i></span>
        </div>  
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a" icon="el-icon-edit">新建博客</el-dropdown-item>
          <el-dropdown-item command="b" disabled icon="el-icon-user-solid">用户中心</el-dropdown-item>
          <el-dropdown-item command="c" icon="el-icon-switch-button">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
  isShowMenu: false
};
},
//监听属性 类似于data概念
computed: {
  isLogin() {
    return !this.$store.state.isLogin
  },
  username() {
    return this.$store.state.currentUsername
  }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  navbarClick(e) {
    if(e.target.nodeName === 'A') {
      
      this.$router.push({
        name: e.target.getAttribute('data-path'), 
        params: {date: Date.now()}
      })
      //this.$router.push(e.target.getAttribute('data-path'))
    }
    //this.$router.push(e.target.getAttribute('data-path'))
    //console.log()
  },
  loginClick() {
    this.$router.push({
      name: 'Login'
    })
  },
  registerClick() {
    this.$router.push({
      name: 'Register'
    })
  },

  handleCommand(command) {
    switch(command) {
      case "a" :
        if(this.$store.state.priority === 1) {
          window.location.href = '/background.html'
        }else {
          this.$message({
            message: '不好意思，权限级别不够哦～',
            type: 'warning'
          })
        }
        break
      case "b" :
        alert('该功能敬请期待')
        break
      case "c" :
        console.log(1)
        localStorage.removeItem('userToken')
        this.$router.go(0)
        break
    }
  },

  mainClick() {
    window.location.href = '/'
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
activated() {
  //keep-alive模式下，下拉菜单的状态不会重置，需要在这里重置一下
  this.isShowMenu = false
}, 
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
$text-color: #666;



.header {
  box-shadow: -1px 0px 3px;
  line-height: 50px;

  .logo {
    margin: 0 0 0 20px;
    color: $text-color;
    font-size: 25px;
    font-weight: 900;
  }
  .nav {
    ul {
      display: flex;
      li {
        display: flex;
        font-size: 18px;
        color: $text-color;
        list-style: none;
        padding: 0 10px;
        align-items: center;
        cursor: pointer;
        &:hover {
          background-color: #eee;
          color: #38b7ea;
        }
        i {
        margin-right: 5px;
        font-size: 18px;
        }
        
      }
    }

  }
  .login {
    .author {
      display: flex;
      float: right;
      margin-right: 10px;
      align-items: center;
      justify-items: center;
      height: 50px;
      span {
        color: #1b6d85;
        cursor: pointer;
      }

    .username {
      padding: 7px 14px;
    }
    }

  
  }
  .menu_bar {
    .button {
      position: relative;
      float: right;
      padding: 9px 10px;
      margin-top: 6px;
      margin-right: 15px;
      margin-bottom: 6px;
      background-color: #333;
      background-image: none;
      color: #fff;
      border: 1px solid transparent;
      border-radius: 4px;
      font-size: 14px;
      border-color: #333;
      &:active {
        background-color: #666;
      }
    }
    
  }

  .menu_drop {
    display: none;
    line-height: 40Px;
    font-size: 16Px;
    color:#666;
    transition-property: max-height;
    transition-duration: 0.7s;
    -webkit-font-smoothing: antialiased;
    ul {
      li {
        list-style: none;
        padding: 0 20px;
        &:hover {
          background-color: #eee;
          color: #38b7ea;
        }
        i {
          font-size: 16px;
        }
      }
    }
    .login {
      padding: 0 20px;
      span {
        color: #1b6d85;
      }
    }
    @media screen and (max-width:767px) {
      display: block;
    }
  }
}

</style>