<template>
  <div id="blog">
    <head1></head1>
    <content1></content1>
    <footer>我是脚部</footer>
  </div>
</template>
<script>

import head1 from 'components/content/Head.vue'
import content1 from 'components/content/Content.vue'
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
name: 'blog',
//import引入的组件需要注入到对象中才能使用
components: {
  head1,
  content1
},
data() {
//这里存放数据
return {

};
},
}
</script>

<style>
@import "../../assets/css/base.css";

html, body {
  width: 100%;
  height: 100%;
  font-size: 14px;
  background-color: #f4f5f7;
}
</style>

<style lang='scss' scoped>


</style>
