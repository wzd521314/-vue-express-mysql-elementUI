<!-- c -->
<template>
<div class='copyright'>
  <el-row>
    <el-col class="content">
      <hr>
      <p>&copy; 2020 萌萌哒的酷狗君 - <i class="el-icon-mic"></i>万振东 版权所有</p>
      <a href="http://www.beian.miit.gov.cn">浙ICP备20027455号</a>
      <p><img src="~assets/img/webLog.png" style="vertical-align: middle;"> <a href="#" style="vertical-align: middle;">公安备案号审核中。。。</a></p>
    </el-col>
  </el-row>
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
.copyright {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 10px;
  
  .content {
    color: rgb(12, 138, 117);
    font-size: 16px;
    text-align: center;

    hr {
      display: block;
      margin-bottom: 10px;
      padding: 0;
      border: 0;
      height: 0;
      border-top: 1px solid #eee;
      -webkit-box-sizing: content-box;
      box-sizing: content-box;
    }
    a {
      text-decoration: none;
      cursor: pointer;
      &:visited {
        color: rgb(12, 138, 117);
      }
      &:hover {
        color: rgb(10, 230, 65);
        text-decoration: underline;
      }
    }
  }
}
</style>