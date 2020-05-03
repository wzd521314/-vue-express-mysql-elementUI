<template>
  <div id="background">
    <el-container id="container">
      <el-header id="header">
        <Header></Header>
      </el-header>
      <el-container id="footer_container">
        <el-aside id="aside" width='200px'>
          <Aside></Aside>
        </el-aside>
        <el-main id="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Header from 'background/content/header'
import Aside from 'background/content/aside'

//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'About',
  //import引入的组件需要注入到对象中才能使用
  components: {
    Header,
    Aside
  },
  data() {
  //这里存放数据
  return {

  };
  },
}
</script>


<style>
  html, body{
  height: 100%;
  }
</style>

<style scoped>
@import "../../assets/css/base.css";



#background {
  height: 100%;
  min-width: 1200px;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;;
}



#container {
  height: 100%;
  background-color: brown;
}


#header {
  background-color: #DCDFE6;
  line-height: 60px;
  padding: 0 0;
}

#aside {
  
  background-color: #DCDFE6;
}

#main {
  
  background-color: #F2F6FC;
}
</style>
