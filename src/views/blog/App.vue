<template>
  <div id="blog">
    <router-view></router-view>
    <footer>
    </footer>
  </div>
</template>
<script>

import head1 from 'components/content/Head.vue'
import 'github-markdown-css/github-markdown.css';

//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
name: 'blog',
//import引入的组件需要注入到对象中才能使用
components: {
  head1,
},
data() {
//这里存放数据
return {

};
},

watch: {
  '$route': function(to ,from) {
    console.log(2)
    if(to.path === from.path) {
      this.$router.go(0)
      console.log(1)
    }
    
    
  }
}
}
</script>

<style lang='scss'>
@import "../../assets/css/base.css";

html, body {
  width: 100%;
  height: 100%;
  line-height: 1.6;
  font-weight: 400;
  color: #333;
  font-size: 14px;
  font-family: "Segoe UI","Lucida Grande",Helvetica,Arial,"Microsoft YaHei",FreeSans,Arimo,"Droid Sans","wenquanyi micro hei","Hiragino Sans GB","Hiragino Sans GB W3",FontAwesome,sans-serif;
}


.article-content .markdown-body {
  
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  
  
  hr {
    height: 1px;
  }
  
  code {
    color: #e96900;
  }

  pre {
    background-color: #272822;
    color: #b6b6b6;
    code {
      color: #b6b6b6;
    }
  }

  img {
    box-sizing: border-box;
    object-fit: cover;
    object-position: center;
  }
}

#article_content .markdown-body {
  overflow:hidden;
  line-height: 2em;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-size: 16px;
  color: #565a5f;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
</style>

<style lang='scss' scoped>


</style>
