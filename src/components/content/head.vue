<!--  -->
<template>
<div class='header'>
  <a href="#" class="logo">酷狗君の博客</a>
  <nav @click = "navbarClick">
    <ul>
      <li>
        <i slot="icon" class="fa fa-home" aria-hidden="true"></i>
        <a  data-path="Home">首页</a>
      </li>
      <li>
        <i slot="icon" class="fa fa-book" aria-hidden="true"></i>
        <a  data-path="Article">文章</a>
      </li>
      <li>
        <i slot="icon" class="fa fa-film" aria-hidden="true"></i>
        <a  data-path="Chat">杂谈</a>
      </li>
      <li>
        <i slot="icon" class="fa fa-user" aria-hidden="true"></i>
        <a  data-path="About">关于我</a>
      </li>
    </ul>
  </nav>
  <div class="search">
    <input type="text" name="" id="" class="nav-search" placeholder="想找点什么？">
    <i slot="icon" class="fa fa-search" aria-hidden="true"></i>
  </div>
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
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  navbarClick(e) {
    if(e.target.nodeName === 'A') {
      
      this.$router.push({name: e.target.getAttribute('data-path')})
      //this.$router.push(e.target.getAttribute('data-path'))
    }
    //this.$router.push(e.target.getAttribute('data-path'))
    //console.log()
  }
  
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
$text-color: #222;



.header {
  height: 50px;
  box-shadow: -1px 0px 3px;
  .logo {
    line-height: 50px;
    margin: 0 30px;
    color: $text-color;
    font-size: 25px;
    font-weight: 900;
  }
  nav {
    display: inline-block;
    vertical-align: top;
    margin-left: 40px;
    height: 100%;
    color: #fff;
    ul {
      display: flex;
      height: 100%;
      align-items: center;
      li {
        font-size: 18px;
        color: $text-color;
        list-style: none;
        margin-right: 20px;
        i {
        margin-right: 5px;
        }
        a {
          color: $text-color;
        }
      }
    }
  }
  .search {
    display: inline-block;
    margin-left: 80px;
    position: relative;
    vertical-align: top;
    width: 300px;
    line-height: 50px;
    input {
      padding: 4px 8px;
      overflow: hidden;
      width: 100%;
      background: #e7e7e7;
      height: 34px;
      border: none;
      box-shadow: none;
      font-size: 14px;
      line-height: 34px;
      transition: all .2s
    }
    i {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      padding: 0;
      width: 48px;
      text-align: center;
      line-height: 34px;
      height: 34px;
      border: none;
      border-radius: 2px;
      background: #e7e7e7;
    }
  }
}

</style>