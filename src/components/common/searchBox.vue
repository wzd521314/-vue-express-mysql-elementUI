<!--  -->
<template>
<div class='search-box'>
  <form id="search">
    <input type="search" name="search" placeholder="想找点什么？">
    <button><i class="fa fa-search" aria-hidden="true"></i></button>
  </form>
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
.search-box{
  width: 500px;
  height: 37px;
  padding: 0 36px 0 16px;
  border: 1px solid #E7E7E7;
  border-radius: 2px;
  background-color: #f4f4f4;
}

#search input{
  position: absolute;
  width: calc(100% - 67px);
  border: none;
  height: 35px;
  padding-top: 4px;
  padding-bottom: 4px;
  line-height: 37px;
  background-color: #f4f4f4;
}
#search button{
  position: absolute;
  border: none;
  right: 0px;
  text-align: center;
  line-height: 35px;
  background-color: #e7e7e7;
  height: 35px;
  width: 50px;
}
#search i{
  display: inline-block;
  height: 35px;
  width: 50px;
}
#search i:hover{
  color:cyan;
}
</style>