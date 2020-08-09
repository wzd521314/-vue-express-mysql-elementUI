<!--  -->
<template>
<div class="body clear-fix" v-if="isShow">
  <el-row  type="flex" justify="center" class="home-content">
    <el-col  :lg="4" :md="5"      class="left hidden-sm-and-down">
      <div>
        <person-card></person-card>
        <div class="web-info">
          <div class="info-head"><i class="el-icon-tickets"></i> 网站信息</div>
          <p><i class="el-icon-edit-outline"></i> 文章总数: {{total}}篇</p>
          <p><i class="el-icon-s-flag"></i> 类别总数: {{labelCount}}个</p>
          <p><i class="el-icon-s-comment"></i> 评论总数: {{commentCount}}条</p>
          <p><i class="el-icon-connection"></i> 留言总数: {{messageCount}}条</p>
          <p><i class="el-icon-date"></i> 网站最后更新: 2020-08-08</p>
        </div>
      </div>
    </el-col>
    <el-col :md="12" :lg="12">
      <div class="clear-fix container">
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
          :pager-count="5"
          :current-page= 'currentPage'
          :page-size= 5
          :total= "total"
          layout="prev, pager, next"
          @current-change="handleCurrentChange">
          </el-pagination>  
        </div>
      </div>
    </el-col>
    <el-col  :lg="5" :md="5"   class="right hidden-sm-only">
      <div>
        <notice :commentCount="commentCount" :messageCount="messageCount" :commentList="commentList"  :messageList="messageList" @toggleComment="toggleComment" @toggleMessage="toggleMessage"></notice>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import personCard from "components/content/personCard.vue"
import blogContent from 'components/content/blogContent.vue'
import notice from 'components/content/notice.vue'
import {postPageData, getNewComment, getNewMessage, getLabelCount} from 'network/home.js'

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
  blogData: [],

  isShow: false,


  commentList: [],
  messageList: [],

  commentCount: null,
  messageCount: null,

  labelCount: null

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  //博客内容分页内容获取
  handleCurrentChange(val) {
    this.currentPage = val
    //页面跳转是获取下一页的数据
    postPageData(5, this.currentPage).then(result => {
      let blog = result.data.data
      this.total = blog[1][0].count
      blog[0].forEach(element => {
        element.article_content = marked(element.article_content)
      }) 
      
      this.blogData = blog[0]
      //分页跳转后回到页面顶部
      document.documentElement.scrollTop = 0
    })
  },
  //根据子元素传递过来的目标页面来获取分页评论
  toggleComment(targetPage){
    getNewComment(targetPage ,5).then(result => {
      
      this.commentList = result.data.data[0]
      this.commentCount = result.data.data[1][0].counts
    })
  },

  //根据子元素传递过来的目标页面来获取分页留言
  toggleMessage(targetPage){
    getNewMessage(targetPage, 5).then(result => {
      this.messageList = result.data.data[0]
      this.messageCount = result.data.data[1][0].counts
    })
  }

  
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  //在页面创建后获取初始化的博客数据
  
  postPageData(5, this.currentPage).then(result => {
    
    let blog = result.data.data
    this.total = blog[1][0].count
    //做个标记，这里首页加载速度慢是因为每次都解析五篇超长文章，以后来修改
    blog[0].forEach(element => {
      element.article_content = marked(element.article_content)
    })
      
    this.blogData = blog[0]
    

    this.$nextTick(() => {
      
      this.isShow = true
    })
  }),
  getNewComment(1 ,5).then(result => {
    
    this.commentList = result.data.data[0]
    this.commentCount = result.data.data[1][0].counts

    
    
  }),
  getNewMessage(1, 5).then(result => {
    this.messageList = result.data.data[0]
    this.messageCount = result.data.data[1][0].counts
    
  }),

  getLabelCount().then(result => {
    this.labelCount = result.data.data[0].counts
    
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
  margin: 0 auto;
  overflow: hidden;
  .home-content {
    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }
  }
  .container {
    padding-top: 20px;

    margin: 0 20px;
    padding-bottom: 10000px;
    margin-bottom: -10000px;
    .pagination {
      display: flex;
      justify-content: center;
    }
  }
  .left {
    padding-top: 20px;

    padding-bottom: 10000px;
    margin-bottom: -10000px;
    .web-info {
      margin-top: 20px;
      box-shadow: 0 2px 5px 0 rgba(33, 22, 22, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
      border: 1px solid silver;
      padding: 15px;
      p {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        padding: 4px 0;
        &:first-of-type {
          margin-top: 16px;
        }
        
      }

      

      .info-head {
        font-size: 16px;
        font-weight: 900;
        border-bottom: 1px solid #999;
        padding-bottom: 8px;
        i {
          padding-right: 5px;
          font-size: 16px;
          font-weight: 900;
        }
      }
    }

  }
  .right {
    padding-top: 20px;
    margin: 0 20px;
    padding-bottom: 10000px;
    margin-bottom: -10000px;

  }
}
</style>