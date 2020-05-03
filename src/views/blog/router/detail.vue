<!--  -->
<template>
<div class='detail'></div>
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
.detail{
  font-size: 18px;
  background-color: #fff;
  width: 100%;
  height: 300px;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  border-radius: 20px;
  margin-bottom: 10px;
}
</style>