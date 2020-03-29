<!--  -->
<template>
<div class='navBar-item' @click="itemClick">
  <slot name="icon"></slot>
  <slot name="name"></slot>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props: {
  path: String
},
data() {
//这里存放数据
return {

};
},
methods: {
  itemClick() {
    this.$router.push(this.path)
  }
}
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.navBar-item span{
  height: 100%;
}
</style>