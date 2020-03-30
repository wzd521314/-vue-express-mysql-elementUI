<!--  -->
<template>
<div class='home'>
  <blog-content v-for="val in blog" :key="val.title">
    <span slot="title">{{val.title}}</span>
    <span slot="time">{{val.createTime}}</span>
    <span slot="article">{{val.article}}</span>
    <span slot="tag">{{val.tag}}</span>
  </blog-content>
</div>
</template>

<script>
import blogContent from 'blog/router/common/blogContent'
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {
  blogContent
},
data() {
//这里存放数据
return {
  blog: {
    test1: {
      title: '第一篇文章',
      createTime: '2020-3-20',
      article: '我是一只粉刷匠',
      tag: 'javaScript'
    },
    test2: {
      title: '第二篇文章',
      createTime: '2020-3-21',
      article: '我要把我的新房子，搞的很漂亮',
      tag: 'Vue'
    }
  }
};
},
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.home{
  display: inline-block;
  width: 100%;
  font-size: 0px;
}
</style>