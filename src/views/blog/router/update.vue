<!--  -->
<template>
<div class='update'>
  <head1></head1>
  <el-row class="main" type="flex" justify="center">
    <el-col :lg="12" :md="16" :sm="20" :xs="24">
      <img src="~assets/img/login.jpg" alt="">
      <div style="padding: 20px 0; text-align: center">もし、桜の落ちるスピードは毎秒5センチメートル、そんなに2つの心はどのくらいかかることが必要ですか？</div>
      <div class="title">
        <p>更新日志</p>
        发布于 2020-08-10
        <el-timeline :reverse="reverse" style="margin-top: 30px">
          <el-timeline-item v-for="(update, index) in updateTree" :key="index" :timestamp="update.timestamp" placement="top" type="success">
            <div class="timeline-content" v-for="(content, n) in update.content" :key="n">- {{content}}</div>
          </el-timeline-item>
        </el-timeline>
      </div>
      <leave-messages></leave-messages>
    </el-col>
  </el-row>
  <copyright></copyright>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import head1 from 'components/content/Head.vue'
import copyright from 'components/common/copyright.vue'
import leaveMessages from 'components/common/leavemessages.vue'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
  head1,
  copyright,
  leaveMessages
},
data() {
//这里存放数据
return {
  reverse: true,
  updateTree: [{
    content: ['工信部ICP备案号申请成功', '网站代码编写进入初步收尾阶段'],
    timestamp: '2020-08-08'
  },
  {
    timestamp: '2020-08-10',
    content: ['源码部署在阿里云服务器上，网站正式上线']
  }]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

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
.update {
  .main {
    padding-top: 50px;
    padding: 50px 20px 0 20px;

    img {
        width: 100%;
      }
    .title {
      font-size: 16px;
      padding-top: 40px;
      border-top: 1px solid  #999;
      p {
        font-weight: 900;
        font-size: 20px;
      }

      .timeline-content {
        text-rendering: optimizeSpeed;
        padding: 4px 0;
        font-size: 16px;
        color: #333;
      }
    }
  }
}
</style>