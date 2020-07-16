<!--  -->
<template>
  <div id="editBlog">
    <div class="header">
      <el-input class="search" placeholder="想找点什么?" v-model="searchContent" clearable></el-input>
      <el-button style="width: 100px" type="primary" icon="el-icon-search">搜索</el-button>
    </div>
    <div class="body">
      <el-table
      :data='blog.list'
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change='handleSelectionChange'>
      <el-table-column type="selection" width="100px"></el-table-column>
      <el-table-column label="日期" width="160px" align="center" prop="article_date"></el-table-column>
      <el-table-column label="文章标题"  align="center" prop="article_title"></el-table-column>
      <el-table-column label="标签" width="200px" prop="label_name" align="center"></el-table-column>
      <el-table-column label="操作" width="300px" align="center">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" @click="handleEdit(scope.row.article_id)">编辑</el-button>
          <el-button type="danger" icon="el-icon-delete" @click="handleDel(scope.row.article_id)">删除</el-button>
        </template>
      </el-table-column>
      </el-table>
    </div>
    <div class="footer clear-fix">
      <div class="delAll"><el-button  type="danger" icon="el-icon-delete" @click="handleDelAll">全部删除</el-button></div>
      <div class="pagination">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="blog.currentPage"
          :page-sizes="[5, 10, 15, 20]"
          :page-size='blog.pageSize'
          layout="total, sizes, prev, pager, next, jumper"
          :total="blog.totalItem">
        </el-pagination>  
      </div>
    </div>
    <div class="dialog">
      <el-dialog
      :visible.sync="dialogVisible"
      title="修改博客">
      <div><span>文章标题：</span><el-input class="input" v-model="editBlog.title" placeholder="请输入文章标题" clearable></el-input></div>
      <div><span>文章分类：</span><el-input class="input" v-model="editBlog.tag" placeholder="请输入文章分类" clearable></el-input></div>
      <mavon-editor class="markdown" v-model="editBlog.content" :toolbars="toolbars"></mavon-editor>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" class="button-item" @click="handleEditBlog">确认</el-button>
        <el-button type="warning" class="button-item" @click="dialogVisible = false">取消</el-button>

      </div>
      </el-dialog>
    </div>
  </div>
  
  
</template>

<script>
import {getBlogDetails, postPageData, delBlog, editBlogData} from 'network/home.js'
import {formatDate, formatDateTime} from 'utils/utils.js'
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
inject: ['reload'],
data() {
//这里存放数据
return {
  dialogVisible: false,
  searchContent: '',
  blog: {
    currentPage: 1,
    pageSize: 10,
    totalItem: null,
    list: []
  },
  editBlog: {
    title: '',
    tag: '',
    content: '',
    id: undefined
  },
  selectionId: null,
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
          trash: true, // 清空
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
  
  //获取首页博客列表数据
  getBlogData(){
    postPageData(this.blog.pageSize, this.blog.currentPage).then(result => {
      this.blog.list = []
      this.blog.totalItem = result.data.data[1][0].count
      this.blog.list = result.data.data[0]
    })
  },

  //处理多选框选择变动
  handleSelectionChange(selection){
    this.selectionId = []
    selection.forEach(element => {
      this.selectionId.push(element.article_id)
    })
  },

  //处理编辑点击
  handleEdit(id) {
    getBlogDetails(id).then(result => {
      this.editBlog.title = result.data.data.article_title;
      this.editBlog.content = result.data.data.article_content;
      this.editBlog.tag = result.data.data.label_name
      this.editBlog.id = result.data.data.article_id
      this.dialogVisible = true;
    })
  },

  //处理确认修改博客
  handleEditBlog() {
    console.log(this.editBlog)
    editBlogData(this.editBlog).then(result => {
      
      if(result.data.errno === 0) {
        this.reload()
      }
    })
  },

  //处理删除点击
  handleDel(id) {
    console.log(id)
    let blogId = []
    blogId[0] = id
    delBlog(blogId).then(result => {
      if(result.data.errno === 0){
        this.reload()
      }
    })
  },

  //处理批量删除点击
  handleDelAll() {
    delBlog(this.selectionId).then(result => {
      if(result.data.errno === 0){
        alert('删除成功！')
        this.reload()
      }
    })
  },

  handleSizeChange(val) {
    this.blog.pageSize = val
    this.getBlogData()
  },
  handleCurrentChange(val) {
    this.blog.currentPage = val
    this.getBlogData()
  }
},


created() {
  this.getBlogData();
  
}
}
</script>
<style lang="scss">
  #editBlog .dialog {
    .el-dialog {
      min-width: 800px;
      .el-dialog__body {
        padding: 10px 20px;
        .input {
          width: 80%;
          margin-bottom: 10px;
        }
        .markdown-body {
          overflow: auto;
          min-height: 400px;
        }
      }
      .el-dialog__footer {
        .dialog-footer {
          display: flex;
          flex-direction:row;
          justify-content: center;
          align-items: center;
        }
      }
    }
    
  }
</style>


<style lang='scss' scoped>
//@import url(); 引入公共css类
.search {
  width: calc(100% - 110px);
  margin-right: 10px;
}

.body {
  margin-top: 5px;
}

.footer {
  position: relative;
  margin-top: 10px;
}

.delAll {
  float: left;
}

.pagination {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>