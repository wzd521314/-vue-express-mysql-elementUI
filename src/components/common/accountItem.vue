<!--  -->
<template>
<div class='account-item'>
  <div class="account-icon"><slot name="account-icon"></slot></div>
  <div class="account-username"><slot name="account-username"></slot></div>
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
.account-item {
  text-align: left;
  height: 35px;
  line-height: 35px;
  border-bottom: 1px solid #f0f0f0;
}
.account-icon{
  display: inline-block;
  height: 16px;
  width: 16px;
}

 .account-username{
   display: inline-block;
   margin-left: 15px;
   font-size: 14px;
 }
</style>