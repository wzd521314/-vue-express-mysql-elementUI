<!--  -->
<template>
<div class='cat'>
  <head1></head1>
  <el-row class="categories" type="flex" justify="center">
    <el-col :lg="12" :md="16" :sm="20" :xs="24">
      <div class="allCategories" v-if="isShow">
        <div class="title"><h2>Categories</h2></div>
        <div class="tagCount">
          目前共计 <span>{{tagCount}}</span> 个分类
        </div>
        <div class="allTag" id="allTag"  ref="allTag" @click="tagClick">
        </div>
      </div>
      <div class="time-line"  v-else>
        <time-line :blogList="dealedBloglist" :currentTag="currentTag"></time-line>
        <div class="pagination">
          <el-pagination
          background
          :pager-count="5"
          :current-page= 'blog.currentPage'
          :page-size= "blog.pageSize"
          :total= "blog.totalItem"
          layout="prev, pager, next"
          @current-change="handleCurrentChange">
          </el-pagination>  
        </div>
      </div>
      <leave-messages></leave-messages>

    </el-col>
  </el-row>
  
  <copyright></copyright>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {getTags, getLabelBlog} from 'network/home.js'
import head1 from 'components/content/Head.vue'
import timeLine from 'components/common/timeLine.vue'
import copyright from 'components/common/copyright.vue'
import leaveMessages from 'components/common/leavemessages.vue'

export default {
//import引入的组件需要注入到对象中才能使用
naem: 'categories',
components: {
  head1,
  timeLine,
  copyright,
  leaveMessages
},
data() {
//这里存放数据
return {
  tagList: [],
  tagCount: null,
  fontSize: 18,

  isShow: true,


  blog: {
    currentPage: 1,
    pageSize: 10,
    totalItem: null,
    list: []
  },

  dealedBloglist: []
};
},
//监听属性 类似于data概念
computed: {
  randomSize() {
    let size = Math.random() * 9 + 12
    return parseInt(size)
  },
  currentTag() {
    let tag = this.$route.query.tag
    return tag
  }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

  //点击标签跳转到对应的分类
  tagClick(event) {
    let currentCategories = event.target.innerText
    this.$router.push({
      name: 'Categories',
      query: {
        tag: currentCategories
      }
    })
    
  },
  //处理分页点击
  handleCurrentChange(val) {
    getLabelBlog(val, 10, this.currentTag).then(result => {
      this.dealedBloglist = result.data.data[0]

      //分页跳转后回到页面顶部
      document.documentElement.scrollTop = 0

    })
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  let currentTag = this.$route.query.tag
  if(currentTag) {
    getLabelBlog(1, 10, this.currentTag).then(result => {
      
      this.dealedBloglist = result.data.data[0]
      this.blog.totalItem = result.data.data[1][0].counts
      
      this.isShow = false
      
      
      
    })

  }else {
    getTags().then(result => {
      this.tagList = result.data.data,
      this.tagCount = result.data.data.length
      
      for(let item of result.data.data) {
        let node = document.createElement('A')
        node.style.fontSize = parseInt(Math.random() * 9 + 12) + 'px'
        node.innerText = item.label_name
        this.$refs.allTag.appendChild(node)
      }
    })
  }
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

<style lang="scss">
  #allTag {
    text-align: center;
    margin-top: 15px;
    a {
      margin: 10px 5px;
      display: inline-block;
      text-decoration: none;
      border-bottom: 1px solid #999;
      color: #616161;
      font-weight: 200;
      -webkit-font-smoothing: antialiased;
      
      cursor: pointer;
      &:hover {
        color: #0e90d2
      }
    }
  }
</style>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.categories {
  overflow: hidden;
  padding: 60px 20px 0 20px;
  .allCategories {
    color: #333;
    .title {
      h2 {
        font-size: 20px;
        color: #333;
        font-weight: 600;
      }
    }
    .tagCount {
      margin-top: 60px;
      text-align: center;
      font-size: 16px;
      span {
        font-size: 22px;
      }
    }
  }
  .time-line {
    .pagination {
      
      margin-top: 40px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>