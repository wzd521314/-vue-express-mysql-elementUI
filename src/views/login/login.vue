<template>
  <div id="login">
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'About',
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
  //这里存放数据
  return {

  };
  },
}
</script>
<style>
@import "../../assets/css/base.css";

html, body{
  height: 100%;
  background-color: plum;
}

#login{
  height: 100%;
  background: url('~assets/img/login.jpg') no-repeat;
  background-position: center center;
}

</style>
