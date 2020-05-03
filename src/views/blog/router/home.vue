<!--  -->
<template>
<div class='home'>
  <blog-content v-for="val in blog.list" :key="val.id">
    <span slot="title">{{val.title}}</span>
    <span slot="time">{{val.createtime}}</span>
    <span slot="article">{{val.content}}</span>
    <span slot="tag">{{val.tag}}</span>
  </blog-content>
</div>
</template>

<script>
import blogContent from 'blog/router/common/blogContent';
import {postPageData} from 'network/home.js'
import {formatDate, formatDateTime} from 'utils/utils.js'
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
  currentPage: 0,
  blog: {
    pagesize: 10,
    targetPage: 1,
    list: []
  }
};
},

methods: {
  getBlogData(){
    postPageData(this.blog.pagesize, this.blog.targetPage).then(result => {
      result.data.data.blogData.forEach((element) => {
        //引入工具函数将时间戳格式化为年-月-日 时-分-秒
        element.createtime = formatDateTime(element.createtime)
        this.blog.list.push(element)
      })
      
    })
  }
},

created() {
  //获取首页博客数据
  this.getBlogData();
}
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