<!--  -->
<template>
<div class='person-card'>
  <div class="head"></div>
  <div class="picture"><img src="~assets/img/picture.jpg" alt=""></div>
  <span class="name"><slot name="name" class="test">萌萌哒的酷狗君</slot></span>
  <p class="person-description">一个努力找实习的前端小菜鸡~</p>
  <card-case class="card-case"></card-case>
</div>
</template>

<script>
import cardCase from 'components/content/cardCase'
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {
  cardCase,
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

.head{
  height: 100px;
  background-image: url(~assets/img/siyue.jpg);
  background-position: center center;
  background-size: cover;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  
}

.picture{
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 90px;
  width: 90px;
  border-radius: 50%;
  transition: all .2s;
  border: 2px solid #fff;
}

.picture:hover{
  height: 110px;
  width: 110px;;
}



.name{
  position: relative;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 500;
  top: 70px;
}

.card-case{
  width: 100%;
  position: absolute;
  bottom: 15px;
}

.person-description{
  position: relative;
  top: 85px;
  font-size: 12px;
}


.person-card {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 400px;
  vertical-align:top;
  min-height: 450px;
  text-align: center;
  background-color: #fff;
  border: 1px solid silver;
  box-shadow: 0 2px 5px 0 rgba(33, 22, 22, 0.2), 0 2px 10px 0 rgba(0,0,0,0.12);  border-radius: 7px;
}

.person-card img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>