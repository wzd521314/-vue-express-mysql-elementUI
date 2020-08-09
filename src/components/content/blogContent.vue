<!--  -->
<template>
<div class='blog'>
  <header>
    <h1><span @click="contentJump"><slot name="article_title">愿你编码半生 归来仍是少年</slot></span></h1>
    <div class="itemRows">
      <span class="item"><i class="el-icon-date"></i><i><slot name="article_date"> 2020-07-14</slot></i></span>
      <span class="item"><i class="el-icon-user"></i><i><slot name="atticle_author"> 萌萌哒的酷狗君</slot></i></span>
      <span class="item"><i class="el-icon-collection-tag"></i><i><slot name="label"> JavaScript</slot></i></span>
    </div>
  </header>
  <div id="article_content">
    <slot name="article-content">
    </slot>
  </div>
  <hr>
  <div class="readMore" @click="contentJump" ><span>阅读全文<i class="fa fa-angle-double-right" aria-hidden="true"></i></span> </div>

  
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {formatDate, formatDateTime} from 'utils/utils.js'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
};
},
//监听属性 类似于data概念
computed: {
  
},
//监控data中的数据变化
watch: {},

props: {
  articleIndex: Number
},
//方法集合
methods: {
  contentJump() {
    this.$router.push({
      path: '/articleContent',
      query: {
        id: this.articleIndex
      }
    })
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
.blog {
  padding: 0 0 20px 20px;
  margin-bottom: 25px;
  box-sizing: content-box;
  border: 1px solid silver;
  box-shadow: 0 2px 5px 0 rgba(33, 22, 22, 0.2), 0 2px 10px 0 rgba(0,0,0,0.12);
  header {
    height: 80px;
    h1 {
      margin: 14px 0 16px 0;
      font-size:  24px;
      font-weight: 600;
      color: #7f7f7f;
      span {
      cursor: pointer;
      &:hover {
        color: #7fa026;
        text-decoration: underline;
      }
      }
    }
    .item {
      font-size: 14px;
      color: #63676d;
      margin-right: 5px;
      i {
        font-style: normal;
      }
    }
  }
  #article_content {
    padding: 10px 8px 10px 8px;
  }
  .readMore {
    font-size: 16px;
    color: #7f7f7f;
    padding-bottom: 3px;
    span {
      cursor: pointer;
      border-bottom: 1px solid;
      &:hover {
        color: indigo;
      }
      i {
        font-size: 16px;
        margin-left: 5px;
      }
    }
  }
  hr {
    margin-top: 10px;
    margin-bottom: 20px;
    border-top: 1px solid #eee;
  }
  .footer {
    i {
      font-size: 16px;
      margin-right: 10px;
      color: #777c83;
    }
  }
}
</style>