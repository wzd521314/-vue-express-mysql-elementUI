<!--  -->
<template>
<div id="head">
  <a href="">酷狗君の博客</a>
  <navbar class="navbar"></navbar>
  <search-box class="search-box"></search-box>
  <div class="login"><i class="fa fa-user-circle-o" aria-hidden="true"></i><span>登录</span></div>
</div>
</template>

<script>
import navbar from 'components/common/navBar'
import searchBox from 'components/common/searchBox'
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {
  navbar,
  searchBox
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
#head{
  min-width: 1500px;
  position: relative;
  height: 45px;
  background-color: #fff;
  color: #222;
  line-height: 45px;
}

#head a{
  margin-left: 30px;
  font-weight: 900;
  font-size: 25px;
  color: #222;
}

.navbar{
  position: absolute;
  top: 0;
  left: 250px;
  overflow: hidden;
}

.search-box{
  position: absolute;
  top: 4px;
  left: 750px;
}

.login{
  float: right;
}

.login i{
  height: 21px;
  line-height: 21px;
  text-align: center;
  width: 32px;
}
</style>