<!--  -->
<template>
<div class='createBlog'>
  <div class='header'><span>新建博客</span></div>
  <el-form class="el_form" :model="blog" ref="blog" :rules="rules" label-width="100px">
    <el-form-item label="文章标题" prop="title">
      <el-input class="input" v-model="blog.title" placeholder="想好起什么标题了没？" clearable></el-input>
    </el-form-item>
    <el-form-item label="文章分类" prop="tag">
      <el-select v-model="blog.tag"  placeholder="选一个喜欢的吧">
        <el-option
        v-for="item in tagLists"
        :key="item.label_id"
        :label="item.label_name"
        :value="item.label_id">
        </el-option>
      </el-select>
      <el-button icon="el-icon-plus" size="small" class="new_tag" type="primary" @click=" centerDialogVisible = true">添加分类</el-button>

    </el-form-item>
    <el-form-item label="文章内容" prop="content">
      <mavon-editor class="markdown" v-model="blog.content" :toolbars="toolbars"></mavon-editor>
    </el-form-item>
    <el-form-item class="button">
      <el-button type="primary" @click="submitForm('blog')">发布文章</el-button>
      <el-button @click="resetForm('blog')">重置内容</el-button>
    </el-form-item>
  </el-form>
  <el-dialog
  title="添加分类"
  :visible.sync="centerDialogVisible"
  width="30%"
  center>
  <el-input v-model="newTag" placeholder="分类名"></el-input>
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="createTag">确 定</el-button>
  </span>
</el-dialog>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {postBlogData ,getTags, newTag} from 'network/home.js'

export default {
//import引入的组件需要注入到对象中才能使用
components: {
  
},
computed: {
  tagArray() {
    let tags = []
    for (let item of this.tagLists) {
      tags.push(item.label_name.toLowerCase())
    }
    return tags
  }
},
data() {
//这里存放数据
return {
  blog: {
    title: '',
    tag: '',
    content: ''
  },

  centerDialogVisible: false,
  newTag: '',

  tagLists: [],
  //表单校验规则
  rules: {
    title: [
      {required: true, message: '请输入文章标题', type: 'string', trigger: 'blur'},
      {max: 25, message: '标题请在25个字符以下哦', trigger: 'blur'}
    ],
    tag: [
      {required: true, message:"请选择一个分类", trigger: 'change'}
    ],
    content: [
      {required: true, message: '请输入文章内容', type: 'string', trigger: 'change'}
    ]
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
   
  submitForm(formName) {
    this.$refs[formName].validate((valid) => {
      console.log(valid)
      if (valid) {
        postBlogData(this.blog.title, this.blog.tag, this.blog.content).then(() => {
          alert('新建博客成功')
        })
        
        alert('submit!');
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  },

  resetForm(formName) {
    this.$refs[formName].resetFields();
  },

  createTag() {
    
    if(this.tagArray.indexOf(this.newTag) > -1) {
      this.newTag = ''
      this.centerDialogVisible = false
      alert('已经有这个分类了哦')

    }else {
      newTag(this.newTag).then(result => {
        
        return getTags()
      
      }).then(result => {
        this.tagLists = result.data.data;
        
        this.newTag = ''
        this.centerDialogVisible = false
        alert('新建分类成功～')

      })
      
    }


    
    
  }

   
},
created() {
  //获取标签列表
  getTags().then(result => {
    this.tagLists = result.data.data;
  })
},
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

.new_tag {
  margin-left: 20px;
}
.el_form {
  margin-top: 30px;
}
</style>