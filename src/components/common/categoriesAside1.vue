<!--  -->
<template>
<div class='categoriesAside'>
  <h3>Archives</h3>
  <div class="tagLists">
    <div class="tagItem" v-for="item in labelInfo" :key="item.label_id">
      <a class="tagName" @click="labelClick(item.years, item.months, item.dateCount)">{{item.years}}年{{item.months}}月</a>
      <span class="articleCount">({{item.dateCount}})</span>
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
data() {
//这里存放数据
return {

};
},

props: {
  labelInfo: {
    
  }
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  labelClick(year,month, count) {
    let dateInfo = {
      year,
      month,
      count
    }
    this.$emit('labelClick', dateInfo)
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
.categoriesAside {
  h3 {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 600;
    color: #333;
  }
  .tagLists {
    margin: 25px 0 0 15px;

    .tagItem {
      font-size: 16Px;
      margin-top: 6px;
      overflow: hidden;
      line-height: 1.5;
      padding: 3px;
      a {
        padding-bottom: 2px;
        color: #616161;
        border-bottom: 1px solid #999;
        &:hover {
          text-decoration: none;
          cursor: pointer;
          color: #38b7ea;
        }
      }
      span {
        color: #B0B0B0;
      }
    }
  }
}
</style>