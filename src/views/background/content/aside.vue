<!--  -->
<template>
<div class='aside'>
  <el-menu
    :default-active="$route.path"
    class="el-menu"
    mode="vertical"
    @select='handleSelect'>
    <el-menu-item index="/createBlog" indexPath='createBlog' class="el-menu-item"><i class="el-icon-edit"></i><span>创建文章</span></el-menu-item>
    <el-menu-item index="/editBlog" class="el-menu-item"><i class="el-icon-document"></i><span>文章管理</span></el-menu-item>
  </el-menu>
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
methods: {
  handleSelect(key, keyPath) {
    this.$router.push(key)
    console.log(key, keyPath);
  }
}
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.el-menu-item {
  line-height: 56px;
  font-size: 18px;
  text-align: center;
  background-color: #DCDFE6;
}
</style>