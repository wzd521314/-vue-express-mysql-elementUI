<!--  -->
<template>
<div class='blogContent'>
  <div class="header">
    <span id="title" ><i class="fa fa-file-text-o" aria-hidden="true"></i><a><slot name="title"></slot></a></span>
    <span id="createTime"><i class="fa fa-clock-o" aria-hidden="true"></i><i class="time"><slot name="time"></slot></i></span>
  </div>
  <div class="content"><slot name="article"></slot></div>
  <div class="footer"><i class="fa fa-tag" aria-hidden="true"></i><a id="tag" ><slot name="tag"></slot></a></div>
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
  
}
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.blogContent{
  min-height: 1px;
  font-size: 18px;
  background-color: #fff;
  width: 100%;
  height: 300px;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  border-radius: 20px;
  margin-bottom: 10px;

}

.header{
  position: relative;
  width: 100%;
  height: 60px;
  font-size: 25px;
  line-height: 60px;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 20px;
  background-color: #fff;
}

#createTime{
  position: absolute;
  right: 20px;
}

#createTime>i{
  font-size: 10px;
  color: gray;
}

.content{
  overflow: hidden;
  height: 180px;
  width: 100%;
  padding: 0px 20px 0px 20px;
  line-height: 30px;
  font-size: 18px;
  color: grey;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}

#title{
  font-weight: bold;
}

#title>i{
  margin-right: 4px;
}
#title a{
  color: #000;
}

#title a:hover{
  color: #ffbb00bb;
}



.time{
  margin-left: 2px;
  font-family: 微软雅黑;
  font-style: normal;
}

.footer{
  padding-left: 10px;
  line-height: 60px;
}

.footer .read-more{
  font-family: 'Courier New', Courier, monospace;
  line-height: 60px;
  font-weight: 600;
  float: right;
  margin-right: 20px;
  color: yellowgreen;
}
.footer .read-more:hover{
  color: pink;
}
.footer i{
  position: relative;
  margin-right: 4px;
  top: 2px;
  color: gray;
  
}

#tag{
  display: inline-block;
  text-align: center;
  padding: 0 3px;
  font-size: 13px;
  height: 20px;
  line-height: 18px;
  color:#fff;
  box-shadow: 0 1px 3px rgba(26,26,26,.1);
  background-color: #00bbff;

}

#tag:hover{
  background-color: royalblue;
}
</style>