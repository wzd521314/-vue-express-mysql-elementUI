<!--  -->
<template>
<div class='blog'>
  <header>
    <h1 ><span @click="contentJump"><slot name="article_title">愿你编码半生 归来仍是少年</slot></span></h1>
    <div class="itemRows">
      <span><i class="fa fa-clock-o" aria-hidden="true"></i><i><slot name="article_date">2020-07-14</slot></i></span>
      <span><i class="fa fa-user" aria-hidden="true"></i><i><slot name="atticle_author">萌萌哒的酷狗君</slot></i></span>
      <span><i class="fa fa-folder-open-o" aria-hidden="true"></i><i><slot name="label">JavaScript</slot></i></span>
    </div>
  </header>
  <div id="article_content">
    <slot name="article-content">
      定风波·南海归赠王定国侍人寓娘》宋代：苏轼常羡人间琢玉郎，天应乞与点酥娘。尽道清歌传皓齿，风起，雪飞炎海变清凉。万里归来颜愈少，微笑，笑时犹带岭梅香。试问岭南应不好，却道：此心安处是吾乡。标题出自此诗中的《万里归来颜愈少》时间过得真的如梭一般，转眼间就已经成为别人口中快要毕业的学长。那么这篇文章就献给即将毕业的自己，用来记录我那恍恍惚惚的四年以及自己的求职之路吧。如果你我是朋友，那么看看关...《定风波·南海归赠王定国侍人寓娘》宋代：苏轼常羡人间琢玉郎，天应乞与点酥娘。尽道清歌传皓齿，风起，雪飞炎海变清凉。万里归来颜愈少，微笑，笑时犹带岭梅香。试问岭南应不好，却道：此心安处是吾乡。标题出自此诗中的《万里归来颜愈少》时间过得真的如梭一般，转眼间就已经成为别人口中快要毕业的学长。那么这篇文章就献给即将毕业的自己，用来记录我那恍恍惚惚的四年以及自己的求职之路吧。如果你我是朋友，那么看看关...
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
  border-radius: 14px;
  header {
    height: 80px;
    h1 {
      margin: 14 0 16px 0;
      font-size:  24px;
      font-weight: 600;
      color: #7f7f7f;
    }
    i {
      font-size: 14px;
      color: #63676d;
      margin-right: 5px;
      font-style: normal;

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