<!--  -->
<template>
<div class='timeLine'>
  <div class="time-line-row">
    <span class="node">
      <i class="el-icon-folder-opened"></i>
    </span>
    <h1 class="title"># 很好！目前总计<span>{{totalCount}}</span>篇日志，继续加油！</h1>
  </div>
  <div v-for="item in blogList" :key="item.year">
    <div class="time-line-row-major">
      <span class="node"></span>
      <div class="nodeYear">{{item.year}}年</div>
    </div>
    <div class="time-line-row-major" v-for="element in item.data" :key="element.article_id">
      <span class="node"></span>
      <div class="content">
        <div class="content_title">
        <a>{{element.article_title}}</a>
        </div>
        <div class="icon-items">
          <i class="fa fa-calendar" aria-hidden="true"> {{element.article_date}}</i>
          <i class="fa fa-folder-open-o" aria-hidden="true"> {{element.label_name}}</i>
        </div>
      </div>
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
  blogList: {
    type: Array,
    default: function() {
      return []
    }
  },
  currentLabel: {
    type: String,
    default: '全部分类'
  },
  totalCount: {
    type: Number,
    default: null
  }
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},


//方法集合
methods: {

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
.timeLine {
  border-left: 3px solid #eceff2;

  .time-line-row {
    margin: 20px 0;
    display: flex;
    align-items: center;
    color: #333333;
    .node {
      color: #fff;
      width: 14px;
      height: 14px;
      font-size: 14px;
      box-sizing: content-box;
      padding: 6px 8px 10px;
      margin: 0 0 0 -17px;
      display: inline-block;
      background-color: #38b7ea;
      border-radius: 50%;
      text-align: center;
      i {
        vertical-align: middle;
      }
    }
    .title {
      font-size: 14px;
      line-height: 30px;
      display: inline-block;
      margin: 0 0 0 10px;
      color: #555;
      font-weight: 500;
      span {
        font-size: 22px;
        color: #555;
        padding: 0 2px 0;
      }
    }
  }
  .time-line-row-major {
    margin: 20px 0;
    .node {
      display: block;
      width: 12px;
      color: #fff;
      height: 12px;
      border-radius: 50%;
      margin: 11px 0 0 -8px;
      background-color: #38b7ea;
      float: left;
      
    }
    .nodeYear {
      margin-left: 30px;
      font-size: 19px;
      font-weight: 300;
      color: #555;
    }

    .content {
      box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
      border: 1px solid #dedede;
      margin-left: 30px;
      position: relative;
      &::before {
      position: absolute;
      top: 10px;
      left: -8px;
      right: 100%;
      width: 0;
      height: 0;
      display: block;
      z-index: 1;
      content: " ";
      border-color: transparent;
      border-style: solid solid outset;
      border-width: 8px 8px 8px 0;
      border-right-color: #dedede;
      pointer-events: none;
      }
      &::after {
        margin-left: 1px;
        z-index: 4;
        position: absolute;
        top: 10px;
        left: -8px;
        right: 100%;
        width: 0;
        height: 0;
        display: block;
        content: " ";
        border-color: transparent;
        border-style: solid solid outset;
        border-width: 8px 8px 8px 0;
        pointer-events: none;
        border-right-color: #f8f8f8;
      }
      .content_title {
        color: #999;
        line-height: 1.2;
        font-size: 16px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 10px 15px;
        border-bottom: 1px solid #eee;
      }
      .icon-items {
        color: #898d92;
        display: inline-block;
        background-color: rgba(244,246,247,0.2);
        width: 100%;
        padding: 10px 5px 10px 15px;
        i {
          margin-right: 8px;
        }
      }
    }
  }
}
</style>