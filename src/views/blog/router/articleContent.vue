<!--  -->
<template>
<div class='content' ref="content">
  <div class="article">
    <div class="article-top">
      <h1>{{articleContent.article_title}}</h1>
      <div class="article-info">
        <span><i class="fa fa-clock-o" aria-hidden="true"></i><i> {{articleContent.article_date}}</i></span>
        <span><i class="fa fa-user" aria-hidden="true"></i><i> {{articleContent.user_nickname}}</i></span>
        <span><i class="fa fa-folder-open-o" aria-hidden="true"></i><i> {{articleContent.label_name}}</i></span>
      </div>
      <div class="article-say">愿自己永远年轻，永远保持热泪盈眶，永远在路上 <span>--- Mr.Wan</span></div>
    </div>
    <div class="article-content"><div  class="highLight markdown-body" v-html="articleContent.article_content"></div></div>
    <div class="article-footer">
      <div class="endButton">完</div>
    </div>
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {getBlogDetails} from 'network/home.js'

import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

import {markdownToc} from 'utils/markdown-toc.js'

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
components: {},
data() {
//这里存放数据
return {
  articleContent: {}
};
},
//监听属性 类似于data概念
computed: {
  articleIndex() {
    return this.$route.query.id
  }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  let article_id = this.$route.query.id
  getBlogDetails(article_id).then(result => {
    this.articleContent = result.data.data
    this.articleContent.article_content = marked(this.articleContent.article_content)
  }).then(() => {
    //待获取到数据后
    
    this.$refs.content.appendChild(markdownToc('.markdown-body'))
    
    
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
destroyed() {
  //在该页面销毁时取消对页面的滚轮监听
  document.body.onscroll = null
}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.article {
  width: calc(100% - 700px);
  margin: 0 auto;
  .article-top {
    margin-top: 80px;
    text-align: center;
    h1 {
      font-size: 28px;
      font-weight: 400;
      color: #4e4e4e;
    }
    .article-info {
      margin-top: 20px;
      span {
        margin-left: 8px;
        i {
          font-style: normal;
          color: #333;
        }
      }
    }
    .article-say {
      border-left: solid 2px #992c12;
      margin-top: 30px;
      text-align: left;
      padding: 15px 7px;
      background-color: #cbee78;
      font-size: 16px;
      font-family: 楷体;
      span {
        float: right;
        margin-right: 15px;
      }
    }
  }
  .article-content {
    margin: 60px 0 30px 0;
    text-align: left;
    font-size: 14px;
    line-height: 1.6;
    padding: 20px;
    overflow: auto;
    width: 100%;
    
  }
  
  .article-footer{
    text-align: center;
    .endButton {
      box-sizing: border-box;
      display: inline-block;
      width: 48px;
      height: 48px;
      font-size: 24px;
      line-height: 48px;
      border-radius: 50%;
      background-color: #f04242;
      text-align: center;
      color: #fff;
    }
  }
  
}
</style>