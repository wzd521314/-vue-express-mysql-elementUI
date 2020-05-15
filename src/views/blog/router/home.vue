<!--  -->
<template>
<div class='home'>
  <blog-content v-for="val in blogData.list" :key="val.id">
    <span slot="title" @click="itemClick(val.id)">{{val.title}}</span>
    <span slot="time">{{val.createtime}}</span>
    <span slot="article" v-html="val.content"></span>
    <span slot="tag">{{val.tag}}</span>
  </blog-content>
  <el-pagination
  background
  :current-page="blogData.currentPage"
  :page-size="blogData.pagesize"
  :total="blogData.total"
  layout="total,  prev, pager, next, jumper"
  @current-change="handleCurrentChange"
  >

  </el-pagination>
</div>
</template>

<script>
import blogContent from 'blog/router/common/blogContent';
import {postPageData} from 'network/home.js'
import {formatDate, formatDateTime} from 'utils/utils.js'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/atom-one-dark-reasonable.css';
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  tables: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

export default {
//import引入的组件需要注入到对象中才能使用
components: {
  blogContent
},
data() {
//这里存放数据
return {
};
},

computed: {
  blogData() {
    console.log(this.$store.state.blog)
    return this.$store.state.blog
  }
},

methods: {
  getBlogData(){
    const blogList = []
    postPageData(this.blogData.pagesize, this.blogData.currentPage).then(result => {
      this.$store.commit('initBlogTotal', result.data.data.blogTotal)
      result.data.data.blogData.forEach((element) => {
        //引入工具函数将时间戳格式化为年-月-日 时-分-秒
        
        element.content = marked(element.content)
        element.createtime = formatDateTime(element.createtime)
        blogList.push(element)
      })
      return true
    }).then(result => {
        this.$store.commit('changeBlogList', blogList)
        console.log(this.$store.state.blog.list)
    })
  },

  handleCurrentChange(val) {
    this.$store.commit('changeBlogCurrentPage', val)
    this.getBlogData()
    const rootElement = document.querySelector('html')
    rootElement.scrollTop = 0
  },

  itemClick(id) {
    this.$router.push({
      name: 'Detail',
      query: {
        id
      }
      
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