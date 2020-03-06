<template>
  <div id="app">
    <h1>这里是首页</h1>
    <a href="/backstage.html">点击跳转到后台页面</a>
    <router-link to='/home'>首页</router-link>
    <router-link to='/about'>关于</router-link>
    <router-view></router-view>
  </div>
  
  
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
name: 'App',
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
</style>
