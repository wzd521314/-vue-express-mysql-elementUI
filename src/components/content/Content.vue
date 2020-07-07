<!--  -->
<template>
<div class="body clear-fix">
  <div class="container clear-fix">
    <div class="content"><router-view></router-view></div>
  </div>
  <div class="left">
    <person-card></person-card>
  </div>
  <div class="right">333</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import personCard from "components/content/personCard.vue"

export default {
//import引入的组件需要注入到对象中才能使用
components: {
  personCard
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
.body {
  padding-top: 20px;
  margin: 0 auto;
  width: calc(100% - 300px);
  overflow: hidden;
  .container {
    float: left;
    width: 100%;
    padding: 0 260px;
    padding-bottom: 10000px;
    margin-bottom: -10000px;
    
  }
  .left {
    float: left;
    width: 250px;
    margin-left: -100%;
    padding-bottom: 10000px;
    margin-bottom: -10000px;

  }
  .right {
    width: 250px;
    float: right;
    margin-left: -250px;
    background-color: brown;
    padding-bottom: 10000px;
    margin-bottom: -10000px;

  }
}
</style>