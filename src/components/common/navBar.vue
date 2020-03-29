<!--  -->
<template>
<div class='nav-bar'>
  <navbar-item class="navbar-item" path="/home">
    <i slot="icon" class="fa fa-home" aria-hidden="true"></i>
    <span  slot="name">首页</span>
  </navbar-item>
  <navbar-item class="navbar-item" path="/article">
    <i slot="icon" class="fa fa-book" aria-hidden="true"></i>
    <span  slot="name">文章</span>
  </navbar-item>
  <navbar-item class="navbar-item" path="/chat">
    <i slot="icon" class="fa fa-film" aria-hidden="true"></i>
    <span  slot="name">杂谈</span>
  </navbar-item>
  <navbar-item class="navbar-item" path="/about">
    <i slot="icon" class="fa fa-user" aria-hidden="true"></i>
    <span  slot="name">关于我</span>
  </navbar-item>
</div>
</template>

<script>
import navbarItem from 'components/common/navBarItem'
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {
  navbarItem
},
data() {
//这里存放数据
return {

};
},
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.nav-bar{
  display: inline-block;
  height: 45px;
}

.navbar-item{
  height: 45px;
  display: inline-block;
  line-height: 45px;
  font-size: 15px;
  padding-left: 8px;
  padding-right: 8px;
}
.navbar-item span{
  margin-left: 3px;
}
</style>