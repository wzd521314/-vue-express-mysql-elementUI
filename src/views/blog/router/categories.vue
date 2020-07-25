<!--  -->
<template>
<div class='categories'>
  <div class="content">
    <div class="allCategories">
      <div class="title"><h2>Categories</h2></div>
      <div class="tagCount">
        目前共计 <span>{{tagCount}}</span> 个分类
      </div>
      <div class="allTag" id="allTag"  ref="allTag" @click="tagClick">
      </div>
    </div>
  </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {getTags} from 'network/home.js'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
  tagList: [],
  tagCount: null,
  fontSize: 18
};
},
//监听属性 类似于data概念
computed: {
  randomSize() {
    let size = Math.random() * 9 + 12
    return parseInt(size)
  }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  tagClick(event) {
    console.log(event.target);
    
  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  getTags().then(result => {
    this.tagList = result.data.data,
    this.tagCount = result.data.data.length
    
    for(let item of result.data.data) {
      let node = document.createElement('A')
      node.style.fontSize = parseInt(Math.random() * 9 + 12) + 'px'
      node.innerText = item.label_name
      this.$refs.allTag.appendChild(node)
    }
  })
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

<style lang="scss">
  #allTag {
    text-align: center;
    margin-top: 15px;
    a {
      margin: 10px 5px;
      display: inline-block;
      text-decoration: none;
      border-bottom: 1px solid #999;
      color: #616161;
      font-weight: 200;
      -webkit-font-smoothing: antialiased;
      
      cursor: pointer;
      &:hover {
        color: #0e90d2
      }
    }
  }
</style>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.categories {
  width: 1000px;
  margin: 0 auto;
  overflow: hidden;
  .content {
    margin: 70px 150px 0 150px;
    .allCategories {
      color: #333;
      .title {
        h2 {
          font-size: 20px;
          color: #333;
          font-weight: 600;
        }
      }
      .tagCount {
        margin-top: 60px;
        text-align: center;
        font-size: 16px;
        span {
          font-size: 22px;
        }
      }
    }
  }
}
</style>