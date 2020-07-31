<!--  -->
<template>
<div class="cat">
  <head1></head1>
  <div class='categories'>
    <div class="content">
      <div class="aside">
        <categories-aside :labelInfo="labelInfo" @labelClick="getLabelBlog"></categories-aside>
      </div>
      <div class="main">
        <time-line :blogList="dealedBlogList"  :totalCount="total"></time-line>
        <div class="pagination">
          <el-pagination
          background
          :current-page= 'blog.currentPage'
          :page-size= "blog.pageSize"
          :total= "blog.totalItem"
          layout="prev, pager, next"
          @current-change="handleCurrentChange">
          </el-pagination>  
        </div>
      </div>
    </div>
  </div>  
</div>
</template>

<script>
import timeLine from 'components/common/timeLine1.vue'
import categoriesAside from 'components/common/categoriesAside1.vue'
import head1 from 'components/content/Head.vue'

import {postPageData, getDateCount, getDateBlog} from 'network/home.js'
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {
  timeLine,
  categoriesAside,
  head1
},

data() {
//这里存放数据
return {
  blog: {
    currentPage: 1,
    pageSize: 10,
    totalItem: null,
    list: []
  },
  labelInfo: {},
  isLabel: false,
  currentYear: null,
  currentMonth: null,
  total: null
};
},
//监听属性 类似于data概念
computed: {
  dealedBlogList() {
    if(this.blog.list.length !==0) {
      let totalData = this.blog.list
      let list = []
      let index = 0
      let originYear = parseInt(this.blog.list[0].article_date.substring(0, 4))
      let currentYear = originYear
      let Info = {
        year: originYear,
        data: [totalData[0]]
      }
      list[index] = Info
      for (let i = 1;i< totalData.length ; i++) {
        currentYear = parseInt(totalData[i].article_date.substring(0, 4))
        if(currentYear === originYear) {
          list[index].data.push(totalData[i])
        }else {
          index++
          list[index] = {
            year: null,
            data: []
          }
          list[index].year = currentYear
          list[index].data.push(totalData[i])
          originYear = currentYear
          
        }
      }

      return list

    }
  }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  //处理分页点击
  handleCurrentChange(val) {
    this.blog.currentPage = val
    if(this.isLabel){

      getDateBlog(this.blog.currentPage, this.blog.pageSize, this.currentYear, this.currentMonth).then(result => {
        this.blog.list = result.data.data
      })
    }else{
      postPageData(this.blog.pageSize, this.blog.currentPage).then(result => {
      this.blog.list = []
      this.blog.totalItem = result.data.data[1][0].count
      this.blog.list = result.data.data[0]
      console.log(this.dealedBlogList)
    })
    }
  },
  //获取对应月份的博客数据
  getLabelBlog(dateInfo) {
    this.currentYear = dateInfo.year
    this.currentMonth = dateInfo.month
    getDateBlog(1, 10, dateInfo.year, dateInfo.month).then(result => {
      this.blog.list = result.data.data
      this.blog.currentPage = 1
      this.blog.totalItem = dateInfo.count
      this.isLabel = true

      console.log(this.blog.list[0].article_date.substring(0,4))
    })
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  postPageData(this.blog.pageSize, this.blog.currentPage).then(result => {
      this.blog.list = []
      
      this.blog.totalItem = result.data.data[1][0].count
      this.total = result.data.data[1][0].count
      this.blog.list = result.data.data[0]


  }),
  getDateCount().then(result => {
    this.labelInfo = result.data.data
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
.categories {
  width: 60%;
  margin: 0 auto;

  .content {
    display: flex;
    justify-content: center;
    margin-top: 70px;
    .aside {
      width: 25%;
    }
    .main {
      width: 75%;
      .pagination {
        display: flex;
        justify-content: center;
        margin: 30px 0;
      }
  }
  }
}
</style>