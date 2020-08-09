<!--  -->
<template>
<div class='cardCase'>
  <account>
    <account-item v-popover:popover><img class="account-picture" src="~assets/img/svg/QQ.svg" slot="account-icon"><a slot="account-username" >南风拂过少年时</a></account-item>
    <account-item><img class="account-picture" src="~assets/img/svg/weiBo.svg" slot="account-icon"><a slot="account-username" href="https://weibo.com/5449696266/">萌萌哒的酷狗君</a></account-item>
    <account-item v-popover:popover1><img class="account-picture" src="~assets/img/svg/weChat.svg" slot="account-icon"><a slot="account-username" >万振东</a></account-item>    
    <account-item><img class="account-picture" src="~assets/img/svg/GitHub.svg" slot="account-icon"><a slot="account-username" href="https://github.com/wzd521314">wzd521314</a></account-item>
  </account>

  <el-popover
    ref="popover"
    placement="right"
    width="200"
    trigger="hover">
    <img src="~assets/img/WechatIMG84.jpeg" alt="">
  </el-popover>

  <el-popover
    ref="popover1"
    placement="right"
    width="200"
    trigger="hover">
    <img src="~assets/img/WechatIMG80.png" alt="">
  </el-popover>
</div>
</template>

<script>
import account from 'components/common/account'
import accountItem from 'components/common/accountItem'
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {
  account,
  accountItem
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
.account-picture{
  vertical-align: middle;
}

img{
  width: 100%;
  height: 100%;
}

a {
  color: #333;
  &:visited {
    color: #333;
  }
}
</style>