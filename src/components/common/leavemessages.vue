<!--  -->
<template>
<div class='comment'>
  <div class="comment-top">
    <div class="comment-input">
      <div class="toLogin" v-if="isLogin">
        <a @click="$router.push({name: 'Login'})">登录</a>后才可以发表留言哦。。。
      </div>
      <div class="toComment" v-else>
        <textarea placeholder="想说点什么呢～" v-model="commentSubmit.commentContent"></textarea>
      </div>
    </div>
    <el-button type="primary" size="medium" round class="commentButton" @click="submitComment">发表</el-button>
  </div>

  <div v-if="this.commentCounts === 0" style="background: #f0f0f0; text-align: center; opacity: .5; margin: 70px 0 0;height: 30px;"><span style="line-height: 30px;font-size: 14px;">求求你了，来一条留言吧。。。</span></div>

  <div class="comment-content" v-else>
    <div class="content-top">
      <span class="comment-word">留言</span>
      <div class="comment-line"></div>
    </div>
    <div class="comment-info">
      <i class="el-icon-more"></i>
      全部留言（{{commentCounts}}）
    </div>

    <div class="comment-body">
      <div class="comment-item" v-for="(item, index) in commentData" :key='index'>
        <div class="container">
          <div class="user-img">
            <img src="~assets/img/noLogin_male.jpg" alt="">
          </div>
          <div class="comment-group">
            <div class="user-info">
              <span class="user-name">{{item.username}} </span>
              <span class="comment-floor">#{{item.floor}}楼</span>
              <span class="publish-date">{{item.submitDate}}</span>
            </div>
            <div class="comment-say">{{item.content}}</div>
            
            <div class="reply">
              <div class="reply-item" v-for="(element,i) in item.reply" :key="i">
                <div class="reply-top">
                  <a>{{element.username}}</a>： <a>@{{element.toName}} </a>
                  {{element.content}}
                </div>
                <div class="reply-tool">
                  <span class="reply-date">{{element.submitDate}}</span>
                  <a @click="replyButton(item, element)"><i class="el-icon-chat-line-round"></i> 回复</a>
                </div>
                <hr>
                <div class="reply-submit" v-show="element.isInput">
                  <textarea class="reply-textarea" placeholder="想对他/她说些什么呢～" v-model='element.submitContent'> </textarea>
                  <el-button type="success" size="small"  @click="submitReply(item, index, element)">发表</el-button>
                  <el-button type="danger" size="small" @click="element.isInput = false; item.submitContent = ''">取消</el-button>
                </div>
              </div>
              
              
 
              <div class="more-reply" v-show="!item.isInput">
                <a @click="commentClick(item)"> <i class="el-icon-edit-outline"></i> 添加新留言</a>
              </div>

              <div class="reply-submit" v-show="item.isInput">
                <textarea class="reply-textarea" placeholder="发表下你的见解吧～" v-model="item.submitContent"></textarea>
                <el-button type="success" size="small"  @click="submitReply(item, index)">发表</el-button>
                <el-button type="danger" size="small" @click="item.isInput = false; item.submitContent = ''">取消</el-button>
              </div>
              
            </div>
          </div>
          
        </div>
        <hr>
      </div>
    </div>
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {submitMessage, getMessage, submitMessageReply} from 'network/users.js'
import {formatDateTime} from 'utils/utils.js'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
  commentCounts: null,

  //等待数据加载中，加载好了才显示留言区域
  isShow: false,


  //提交的留言数据模型
  commentSubmit: {
    commentContent: '',
    answerId: this.$store.state.currentUserId,
    commentDate: null
  },


  //记录每层楼对应的id
  commentId: [],
  
  //留言区数据集合
  commentData: [],

 

  //回复数据
  replyItem: {
    fromUsername: '',
    fromUserId: null,
    toUsername: '',
    toUserId: null,
    submitDate: null,
    content: ''

  }


};
},
//监听属性 类似于data概念
computed: {
  isLogin() {
    return !this.$store.state.isLogin
  }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  toReply() {
    this.isReply = true
  },
  //点击二级留言的回复按钮
  replyButton(item,  element){
    if(!this.isLogin) {
      item.isInput = false;
      for(let i of item.reply) {
        i.isInput = false
      }
      element.isInput = true

    }else {
      this.$router.push({name: 'Login'})
    }
  },
  //提交留言
  async submitComment() {
    

    if(!this.isLogin) {
      if(!this.commentSubmit.commentContent) {
        this.$message('总点写点什么吧～')
        return false
      }
      
      this.commentSubmit.commentDate = formatDateTime(Date.now())
      let res = await submitMessage(this.commentSubmit)
      
      if(res.data.errno === 0 ) {
        //当回复成功时，我们要动态地将刚刚回复的那条信息更新在页面上
        let newData = {}
        //这是数据库返回过来的你新插入的ID
        newData.commentId = res.data.data
        //内容不用多说，就是你刚刚传到数据库的内容
        newData.content = this.commentSubmit.commentContent 
        //一级留言的楼层
        newData.floor = this.commentData.length + 1
        //默认都是false
        newData.isInput = false
        //父一级留言的id
        newData.pid = 0
        //一级留言的回复都是空
        newData.reply = []
        //提交的留言内容也要初始化
        newData.submitContent = ''
        //提交的时间也是你刚刚提交的那个
        newData.submitDate = this.commentSubmit.commentDate
        //对谁说的是你留言的这条回复的主人 因为这里是一级留言，所以不需要toName
        newData.toName =  null
        //userId则是你自己
        newData.userId = this.$store.state.currentUserId
        //username也是你自己的name
        newData.username = this.$store.state.currentUsername

        
        //然后将这条内容添加到留言区内容的第一条
        this.commentData.unshift(newData)
        //刷新后将留言框内容清空
        this.commentSubmit.commentContent = ''
        this.commentCounts += 1
        
        

      }else {
        alert('留言失败')
      }




    }else {
      this.$router.push({name: 'Login'})
    }
  },

  //提交回复
  async submitReply(item, index, element) {
    let reply1 = {}
    if(!this.isLogin) {
      
      if(element) {
        
        if(!element.submitContent) {
          element.isInput = false
          this.$message('总点写点什么吧～')
          return false
        }


        //这里是传给数据库的数据格式部分
        reply1.submitDate = formatDateTime(Date.now())
        reply1.content = element.submitContent
        reply1.fromId = this.$store.state.currentUserId
        reply1.toId = element.userId
        reply1.pid = item.commentId


        let res = await submitMessageReply(reply1)
        element.submitContent = ''
        if(res.data.errno === 0 ) {
          //当回复成功时，我们要动态地将刚刚回复的那条信息更新在页面上
          let newData = {}
          //这是数据库返回过来的你新插入的ID
          newData.commentId = res.data.data
          //内容不用多说，就是你刚刚传到数据库的内容
          newData.content = reply1.content 
          //因为是二级回复，所有没有楼层
          newData.floor = null
          //默认都是false
          newData.isInput = false
          //父一级留言的id
          newData.pid = item.commentId
          //二级留言的回复都是空
          newData.reply = []
          //提交的留言内容也要初始化
          newData.submitContent = ''
          //提交的时间也是你刚刚提交的那个
          newData.submitDate = reply1.submitDate
          //对谁说的是你留言的这条回复的主人
          newData.toName = element.username
          //userId则是你自己
          newData.userId = this.$store.state.currentUserId
          //username也是你自己的name
          newData.username = this.$store.state.currentUsername

          
          element.isInput = false
          item.reply.push(newData)
          this.commentCounts += 1

        }else {
          alert('留言失败')
        }
      }else {
        if(!item.submitContent) {
          item.isInput = false
          this.$message('总点写点什么吧～')
          return false
        }
        //这里是传给数据库的格式部分
        reply1.submitDate = formatDateTime(Date.now())
        reply1.content = item.submitContent
        reply1.fromId = this.$store.state.currentUserId
        reply1.toId = item.userId
        reply1.pid = item.commentId

        let res = await submitMessageReply(reply1)
        item.submitContent = ''
        if(res.data.errno === 0 ) {
          let newData = {}
          //这是数据库返回过来的你新插入的ID
          newData.commentId = res.data.data
          //内容不用多说，就是你刚刚传到数据库的内容
          newData.content = reply1.content 
          //因为是二级回复，所有没有楼层
          newData.floor = null
          //默认都是false
          newData.isInput = false
          //父一级留言的id
          newData.pid = item.commentId
          //二级留言的回复都是空
          newData.reply = []
          //提交的留言内容也要初始化
          newData.submitContent = ''
          //提交的时间也是你刚刚提交的那个
          newData.submitDate = reply1.submitDate
          //对谁说的是你留言的这条回复的主人
          newData.toName = item.username
          //userId则是你自己
          newData.userId = this.$store.state.currentUserId
          //username也是你自己的name
          newData.username = this.$store.state.currentUsername

          item.isInput = false
          item.reply.push(newData)
          this.commentCounts += 1

        }else {
          alert('留言失败')
        }
      }
      
      
      
    }
    

    

  },

  //点击回复一级留言按钮
  commentClick(item) {
    
    if(!this.isLogin) {
      for(let i of item.reply) {
        i.isInput = false
      }
      item.isInput = true
    }else {
      this.$router.push({name: 'Login'})
    }
    
  },
  

  //获取留言信息并对齐进行处理
  async dealComment() {
    this.commentSubmit.commentContent = ''
    this.commentData = []
    this.commentId = []
    let res = await getMessage(this.$route.query.id)
    let commentData = res.data.data
    this.commentCounts = commentData.length
    
    for(let i = 0; i<commentData.length; i++) {
      //根据pid来确定一级留言，一级留言的pid为0
      let commentItem = {
        username: '',
        userId: null,
        floor: null,
        submitDate: null,
        content: '',
        isInput: false,
        commentId: null,
        submitContent: '',
        toName: null,
        pid: 0,
        reply: []
      };
      if(commentData[i].pid === 0) {
        commentItem.username = commentData[i].fromName;
        
        commentItem.userId = commentData[i].fromId;
        commentItem.floor =  i + 1 ;
        commentItem.submitDate = commentData[i].commentDate;
        commentItem.content = commentData[i].commentContent;
        commentItem.commentId = commentData[i].id;
        this.commentId.unshift(commentItem.commentId)
        this.commentData.unshift(commentItem)
      }else {
        let index = this.commentId.indexOf(commentData[i].pid)
        
        
        commentItem.username = commentData[i].fromName;
        commentItem.userId = commentData[i].fromId;
        commentItem.submitDate = commentData[i].commentDate;
        commentItem.content = commentData[i].commentContent;
        commentItem.commentId = commentData[i].id;
        commentItem.toName = commentData[i].toName
        commentItem.pid = commentData[i].pid

        this.commentData[index].reply.push(commentItem)
        //这里是二级留言/回复数据的处理
      }
    }
    

     
    

    
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  this.dealComment()
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
.comment {
  margin: 60px  0  60px 0;
  .comment-top {
    overflow: hidden;
    .comment-input {
      border: 1px solid #4398ed;
      padding: 15px 15px 5px;

      border-radius: 7px;
      .toLogin {
        width: 100%;
        height: 70px;
        a {
          cursor: pointer;
          font-size: 16px;
          color: #0e90d2;
        }
      }

      .toComment {
        textarea {
          width: 100%;
          height: 50px;
          background: 0 0;
          overflow-x: hidden;
          overflow-y: auto;
          border: 0;
          font-size: 14px;
          resize: none;
          line-height: normal;
          text-align: left;
          outline: none;
        }
      }
    }
    .commentButton {
      font-size: 16px;
      margin-top: 20px;
      float: right;
    }
  }


  .comment-content {
    margin-top: 50px;
    .content-top {
      .comment-word {
        font-size: 17px;
        padding: 6px 15px 6px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        border-top: 1px solid #4398ed;
        border-left: 1px solid #4398ed;
        border-right: 1px solid #4398ed;
        color: #4398ed;
      }
      .comment-line {
        left: 65px;
        width: 88%;
        border-bottom: 1px solid #4398ed;
        margin-top: 3px;
        position: relative;
      }
    }
    
    .comment-info {
      margin: 20px 0;
      color: #4398ed;
      font-size: 16px;
      line-height: 1.6;
      i {
        transform: rotate(90deg);
      }
    }

    .comment-body {
      .comment-item {
        hr {
          display: block;
          padding: 0;
          border: 0;
          height: 0;
          border-top: 1px solid #eee;
          -webkit-box-sizing: content-box;
          box-sizing: content-box;
          margin: 16px 0 16px 0;
        }
        .container {
          overflow: hidden;
          .user-img {
            float: left;
            width: 50px;
            height: 50px;
            overflow: hidden;
            border-radius: 50%;
            img {
              width: 100%;
              height: 100%;
              background-size:cover;
              background-repeat: no-repeat;
            }
          }
          .comment-group {
            float: right;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            width: calc(100% - 50px);
            padding: 0px 15px;
            .user-info {
              overflow: hidden;
              span {
                font-size: 14px;
              }
              .user-name {
                float: left;
                color: #4398ed;
              }
              .comment-floor {
                float: left;
                margin-left: 10px;
                
              }
              .publish-date {
                float: right;
                color: #A0A0A0;
              }
            }
            .comment-say {
              margin-top: 5px;
              padding: 8px 0;
              font-size: 16px;
            }
            .tool-group {
              margin-bottom: 8px;
              a {
                font-size: 14px;
                cursor: pointer;
                color: #969696;;
                &:hover {
                  cursor: pointer;
                  color: #63676d;
                }
              }
            }

            .reply {
              padding: 5px 0 5px 20px;
              border-left: 2px solid #d9d9d9;
              .reply-item {
                .reply-top {
                  a {
                    
                    color: #0e90d2;
                    cursor: pointer;
                    &:hover {
                      color: #095f8a;
                      cursor: pointer;
                    }
                  }
                }

                .reply-tool {
                  display: flex;
                  margin: 4px 0;
                  align-items: center;
                  font-size: 14px;
                  span {
                    color: #A0A0A0;
                    margin-right: 8px;
                  }
                  a {
                    cursor: pointer;
                    color: #969696;

                    &:hover {
                      cursor: pointer;
                      color: #63676d;
                    }
                  }
                }

                hr {
                  border-top: 1px dashed #ccc;
                  height: 0;
                  margin: 15px auto;
                  overflow: hidden;
                  clear: both;
                }
              }

              .more-reply {
                font-size: 16px;
                a {
                  color: #63676d;
                  cursor: pointer;
                  &:hover {
                    cursor: pointer;
                    color: black;
                  }
                }
              }

              .reply-submit {
                overflow: hidden;
                .reply-textarea {
                  padding: 10px 15px;
                  width: 100%;
                  height: 80px;
                  font-size: 13px;
                  border: 1px solid #dcdcdc;
                  border-radius: 4px;
                  background-color: hsla(0,0%,71%,.1);
                  resize: none;
                  display: inline-block;
                  vertical-align: top;
                  outline-style: none;
                  margin-bottom: 16px;
                }
                button {
                  float: right;
                  margin-right: 10px;
                }
              }
            }
          }

        }
      }
    }
  }
}
</style>