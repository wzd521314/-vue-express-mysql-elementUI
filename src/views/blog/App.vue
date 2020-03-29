<template>
  <div id="blog">
    <div class="header">
      <!-- 头部栏 -->
      <Head></Head>
    </div>
    <div class="content clear-fix">
      <!-- 人物卡片 -->
      <div id="left"><person-card class="person-card"></person-card></div>
      <div id="center"><router-view></router-view></div>
      <div id="right"><div class="notice"></div></div>
    </div>
  </div>
</template>
<script>
import Head from 'components/content/head'
import personCard from 'components/content/personCard'
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
name: 'blog',
//import引入的组件需要注入到对象中才能使用
components: {
  Head,
  personCard
},
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
  min-width: 1500px;


}

#blog{
  height: 100vh;
}

.content{
  position: relative;
  background: url("~assets/img/blog.jpg") no-repeat fixed;
  min-height: calc(100% - 45px);
  background-position: center;
  background-size: cover;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
}

#left{
  width: 15%;
  float: left;
}

#center{
  float: left;
  font-size: 0px;
  width: 70%;
  background-color: darkmagenta;
}

#right{
  float: left;
  width: 15%;
  background-color: darkred;
}

.notice{
  height: 300px;
}
</style>
