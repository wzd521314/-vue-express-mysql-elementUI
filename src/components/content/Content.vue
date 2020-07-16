<!--  -->
<template>
<div class="body clear-fix">
  <div class="container clear-fix">
    <div class="content">
      <blog-content v-for="item of blogData" :key="item.article_id" :articleIndex="item.article_id">
        <template #article_title>
          {{item.article_title}}
        </template>
        <template #article_date>
          {{item.article_date}}
        </template>
        <template #article_author>
          {{item.user_nickname}}
        </template>
        <template #label>
          {{item.label_name}}
        </template>
        <template #article-content>
          <div class="highLight markdown-body"><div v-html="item.article_content"></div></div>
        </template>
      </blog-content>
    </div>
    <div class="pagination">
      <el-pagination
      background
      :current-page= 'currentPage'
      :page-size= 5
      :total= "total"
      layout="prev, pager, next"
      @current-change="handleCurrentChange">
      </el-pagination>  
    </div>
  </div>
  <div class="left">
    <person-card></person-card>
  </div>
  <div class="right">
    <notice></notice>
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import personCard from "components/content/personCard.vue"
import blogContent from 'components/content/blogContent.vue'
import notice from 'components/content/notice.vue'
import {postPageData} from 'network/home.js'

import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

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
  personCard,
  blogContent,
  notice

},
data() {
//这里存放数据
return {
  total: null,
  currentPage: 1,
  blogData: []
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  handleCurrentChange(val) {
    this.currentPage = val
    //页面跳转是获取下一页的数据
    postPageData(5, this.currentPage).then(result => {
      let blog = result.data.data
      this.total = blog[1][0].count
      blog[0].forEach(element => {
        console.log(element)
        element.article_content = marked(element.article_content)
      }) 
      
      this.blogData = blog[0]
    })
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  //在页面创建后获取初始化的博客数据
  postPageData(5, this.currentPage).then(result => {
    let blog = result.data.data
    this.total = blog[1][0].count
    blog[0].forEach(element => {
        element.article_content = marked(element.article_content)
      })
    this.blogData = blog[0]
    console.log(this.blogData)
  })
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
.body {
  padding-top: 20px;
  margin: 0 auto;
  width: calc(100% - 200px);
  overflow: hidden;
  .container {
    float: left;
    width: 100%;
    padding: 0 280px;
    padding-bottom: 10000px;
    margin-bottom: -10000px;
    .pagination {
      display: flex;
      justify-content: center;
    }
  }
  .left {
    float: left;
    width: 250px;
    margin-left: -100%;
    padding-bottom: 10000px;
    margin-bottom: -10000px;

  }
  .right {
    width: 250px;
    float: right;
    margin-left: -250px;
    padding-bottom: 10000px;
    margin-bottom: -10000px;

  }
}
</style>