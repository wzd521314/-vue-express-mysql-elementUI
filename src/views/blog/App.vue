<template>
  <div id="blog">
    <div class="header">
      <!-- 头部栏 -->
      <Head></Head>
    </div>
    <div class="content clear-fix">
      <!-- 人物卡片 -->
      <div id="center"><router-view></router-view></div>
      <div id="left"><person-card class="person-card"></person-card></div>
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
  html, body{
  height: 100%;
  }
</style>

<style lang='scss' scoped>
@import "../../assets/css/base.css";



#blog{
  height: 100%;
}

.content{
  position: relative;
  overflow: hidden;
  background: url("~assets/img/blog.jpg") no-repeat fixed;
  min-width: 1500px;
  min-height: calc(100% - 45px);
  background-position: center;
  background-size: cover;
  padding-left: 500px;
  padding-right: 500px;
  padding-top: 20px;
}

#left{
  position: relative;
  left: -270px;
  width: 250px;
  padding-bottom: 10000px;
  margin-bottom: -10000px;
  float: left;
  margin-left: -100%;
}

#center{
  float: left;
  min-height: 100px;

  font-size: 0px;
  padding-bottom: 10000px;
  margin-bottom: -10000px;
  width: 100%;
}

#right{
  position: relative;
  right: -320px;
  float: left;
  margin-left: -300px;
  padding-bottom: 10000px;
  margin-bottom: -10000px;
  width: 300px;
  background-color: darkred;
}

.notice{
  height: 300px;
}
</style>
