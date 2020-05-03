<!--  -->
<template>
<div class='createBlog'>
  <div class='header'><span>新建博客</span></div>
  <div class="main">
    <div><span>文章标题：</span><el-input class="input" v-model="blog.title" placeholder="请输入文章标题" clearable></el-input></div>
    <div><span>文章分类：</span><el-input class="input" v-model="blog.tag" placeholder="请输入文章分类" clearable></el-input></div>
  </div>
  <div class="footer">
    <mavon-editor class="markdown" v-model="blog.content" :toolbars="toolbars"></mavon-editor>
    <div class="button">
      <el-button type="primary" class="button-item" @click='newBlog' >发布文章</el-button>
      <el-button type="warning" class="button-item" @click='clearBlog'>清空内容</el-button>
    </div>
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {postBlogData} from 'network/home.js'

export default {
//import引入的组件需要注入到对象中才能使用
components: {
  
},
data() {
//这里存放数据
return {
  blog: {
    title: '',
    tag: '',
    content: ''
  },
  //markdown插件配置
  toolbars:{
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          strikethrough: true, // 中划线
          mark: true, // 标记
          superscript: true, // 上角标
          subscript: true, // 下角标
          quote: true, // 引用
          ol: true, // 有序列表
          ul: true, // 无序列表
          link: true, // 链接
          imagelink: true, // 图片链接
          code: true, // code
          table: true, // 表格
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          htmlcode: true, // 展示html源码
          help: true, // 帮助
          /* 1.3.5 */
          undo: true, // 上一步
          redo: true, // 下一步
          trash: false, // 清空
          save: false, // 保存（触发events中的save事件）
          /* 1.4.2 */
          navigation: true, // 导航目录
          /* 2.1.8 */
          alignleft: true, // 左对齐
          aligncenter: true, // 居中
          alignright: true, // 右对齐
          /* 2.2.1 */
          subfield: true, // 单双栏模式
          preview: true, // 预览
        }


};
},
 methods: {
   newBlog() {
     console.log(this.blog)
     postBlogData(this.blog.title, this.blog.tag, this.blog.content).then(res => {
       console.log(res)
     })
   },

   clearBlog() {
     this.blog.content = ''
   }
 }
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类

.createBlog {
  height: 100%;
}

.header {
  font-size: 24px;
  color: #409EFF;
  line-height: 50px;
  border-bottom-style: solid;
  border-width: 2px;
  height: 50px;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 140px;
}

.footer {
  min-height: 600px;
  height: calc(100% - 190px);
}

.input {
  width: 50%;
}

.markdown {
  overflow: auto;
  min-height: 550px;
}

.button {
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  height: 15%;
}

</style>