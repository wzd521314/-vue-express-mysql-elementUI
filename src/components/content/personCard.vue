<!--  -->
<template>
<div class='person-card'>
  <div class="head"></div>
  <div class="picture"><slot name="picture"></slot></div>
  <span class="name"><slot name="name" class="test">迷う犬さん</slot></span>
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
  cardCase
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
.person-card{
  position: relative;
  display: inline-block;
  width: 13%;
  min-width: 200px;
  height: 50%;
  min-height: 450px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  border-radius: 7px;
}

.head{
  height: 100px;
  background-color: chartreuse;
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

@font-face {
  font-family: ExampleFont;
  src: url(/path/to/fonts/examplefont.woff) format('woff'),
       url(/path/to/fonts/examplefont.eot) format('eot');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

.name{
  font-family: "メイリオ", "Hiragino Kaku Gothic ProN", "MS PGothic", Osaka, "sans-serif";;
  position: relative;
  font-size: 18px;
  font-weight: 500;
  top: 70px;
}

.card-case{
  width: 100%;
  position: absolute;
  bottom: 15px;
}
</style>