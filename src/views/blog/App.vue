<template>
  <div id="blog">
    <div class="header">
      <!-- 头部栏 -->
      <Head></Head>
    </div>
    <div class="content">
      <!-- 人物卡片 -->
      <person-card class="person-card"><img src="~assets/img/picture.jpg" alt="" slot="picture"></person-card>
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
  background: url("~assets/img/blog.jpg") no-repeat;
  background-size: cover;
  background-position: center center;
}

#blog{
  height: 100vh;
}

.content{
  height: calc(100% - 45px);
}

.person-card img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

</style>
