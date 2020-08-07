<!--  -->
<template>
<div class='notice'>
  <div class="poetry">
    <div><i class="fa fa-quote-left icon" aria-hidden="true"></i></div>
    <div class="poet">
      <p>欲买桂花同载酒</p>
      <p>终不似</p>
      <p>少年游</p>
    </div>
    <div class="right-quote"><i class="fa fa-quote-right icon" aria-hidden="true"></i></div>
  </div>
  <div class="new-comment">
    <p>最新评论</p>
    <div class="commentItem" v-for = "item in commentList" :key="item.id">
      <div style="position: relative;padding: 8px 87px 8px 0; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;"><span class="title" @click="$router.push({name: 'articleContent', query: {id: item.article_id}})">{{item.article_title}}</span><span class="date">{{item.commentDate.substring(0, 10)}}</span></div>
      <div style="padding-bottom: 8px; color: #999;  text-overflow: ellipsis; white-space: nowrap; overflow: hidden;" class="content"><span>{{item.fromName}}: </span><span> @{{item.toName}}</span> <span>{{item.commentContent}}</span></div>
    </div>
    <div class="pagination">
      <el-button @click="toggleComment(currentCommentPage - 1)" type="primary" size="small" v-show="commentDown"><i class="el-icon-d-arrow-left" ></i> 上一页</el-button>
      <el-button @click="toggleComment(currentCommentPage + 1)" type="primary" size="small" v-show="commentUp">下一页 <i class="el-icon-d-arrow-right" ></i></el-button>
    </div>
  </div>
  <div class="new-message">
    <p>最新留言</p>
    <div class="messageItem" v-for = "item in messageList" :key="item.id">
      <div @click="$router.push({name: 'Categories'})" style="position: relative;padding: 8px 87px 8px 0; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;"><span>{{item.fromName}}: </span><span>{{item.commentContent}}</span><span class="date">{{item.commentDate.substring(0, 10)}}</span></div>
    </div>
    <div class="pagination">
      <el-button @click="toggleMessage(currentMessagePage - 1)" type="primary" size="small" v-show="messageDown"><i class="el-icon-d-arrow-left"></i> 上一页</el-button>
      <el-button @click="toggleMessage(currentMessagePage + 1)" type="primary" size="small" v-show="messageUp">下一页 <i class="el-icon-d-arrow-right"></i></el-button>
    </div>
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props: {
  commentList: {
    type: Array,
    defult: function() {
      return []
    }
  },
  messageList: {
    type: Array,
    defult: function() {
      return []
    }
  },
  commentCount: {
    type: Number,
    default: 0
  },
  messageCount: {
    type: Number,
    default: 0
  },
},
data() {
//这里存放数据
return {
  currentCommentPage: 1,
  currentMessagePage: 1,


  commentUp: true,
  commentDown: false,

  messageUp: true,
  messageDown: false
};
},
//监听属性 类似于data概念
computed: {
  totalCommentPage() {
    return parseInt(this.commentCount / 5) + 1
  },
  totalMessagePage() {
    return parseInt(this.messageCount / 5) + 1
  }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  toggleComment(targetPage) {
    if(targetPage > 0 && targetPage< this.totalCommentPage + 1) {

      
      this.currentCommentPage = targetPage
      this.$emit("toggleComment", targetPage)
      this.commentUp = true
      this.commentDown = true

      if(targetPage === 1) {
        this.commentDown = false
      }

      if(targetPage === this.totalCommentPage) {
        this.commentUp = false
      }
    }
  },
  toggleMessage(targetPage) {
    
    if(targetPage > 0 && targetPage < this.totalMessagePage + 1) {
      this.currentMessagePage = targetPage
      this.$emit("toggleMessage", targetPage)

      this.messageUp = true
      this.messageDown = true

      if(targetPage === 1) {
        
        this.messageDown = false
      }

      if(targetPage === this.totalMessagePage) {
        this.messageUp = false
      }
    }
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

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
.notice {
  .poetry {
    box-shadow: 0 2px 5px 0 rgba(33, 22, 22, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    border: 1px solid silver;
    padding: 15px;
    .poet {
      padding: 7px 10px;
      p {
        text-align: center;
        font-size: 14px;
        line-height: 19px;
        color: #333;
        font-weight: 400px;
        margin-bottom: 16px;
      }
      
    }
    .right-quote {
      text-align: right;
    }
    
    
  }

  .new-comment {
    box-shadow: 0 2px 5px 0 rgba(33, 22, 22, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    border: 1px solid silver;
    margin-top: 20px;
    padding: 0 10px;
    p {
      font-size: 16px;
      padding: 10px 0;
      border-bottom: 1px solid #dedede;
    }

    .commentItem {
      border-bottom: 1px solid #dedede;
      .title {
        color: rgb(199, 209, 143);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        cursor: pointer;
        &:hover {
          color: rgb(235, 21, 171);
        }
      }

      .date {
        position: absolute;
        right: 0;
        color: #999;
      }
    }

    .pagination {
      padding: 10px 10px;
      display: flex;
      justify-content: center;
      button {
        background-color: transparent;
        border: transparent;
        color: #999;
        &:active {
          color:rgb(235, 21, 171);
        }
        &:hover {
          background-color: rgb(231, 232, 233);
        }
      }
      
    }
  }
  .new-message {
    box-shadow: 0 2px 5px 0 rgba(33, 22, 22, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    border: 1px solid silver;
    margin-top: 20px;
    padding: 0 10px;
    p {
      font-size: 16px;
      padding: 10px 0;
      border-bottom: 1px solid #dedede;
    }

    .messageItem {
      border-bottom: 1px solid #dedede;
      color: #999;
      div {
        cursor: pointer;
        &:hover {
          color: rgb(27, 211, 150);
        }
      }
      .title {
        color: rgb(199, 209, 143);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        cursor: pointer;
        &:hover {
          color: rgb(235, 21, 171);
        }
        
      }

      .date {
        position: absolute;
        right: 0;
        color: #999;
      }
    }

    .pagination {
      padding: 10px 10px;
      display: flex;
      justify-content: center;
      button {
        background-color: transparent;
        border: transparent;
        color: #999;
        &:active {
          color:rgb(235, 21, 171);
        }
        &:hover {
          background-color: rgb(231, 232, 233);
        }
      }
      
    }
  }
  
  
}
</style>