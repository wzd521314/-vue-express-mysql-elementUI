<!--  -->
<template>
<div class='header'>
  <div class="left"><span>BLOG-Kugou</span></div>
  <div class="right">aaa</div>
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
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.header {
  height: 100%;
}

.left {
  float: left;
  color: #606266;
  font-size: 24px;
  letter-spacing: 2px;
  font-weight: bold;
  text-align: center;
  width: 200px;
}

.right {
  float: right;
  width: 100px;
  background-color: darkorchid;
}
</style>