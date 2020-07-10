<!--  -->
<template>
<div class='notice'>
  <div class="poetry">
    <div><i class="fa fa-quote-left" aria-hidden="true"></i></div>
    <div class="poet">
      <p>欲买桂花同载酒</p>
      <p>终不似</p>
      <p>少年游</p>
    </div>
    <div class="right-quote"><i class="fa fa-quote-right" aria-hidden="true"></i></div>
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
.notice {
  box-shadow: 0 2px 5px 0 rgba(33, 22, 22, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 7px;
  border: 1px solid silver;
  .poetry {
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
  
}
</style>