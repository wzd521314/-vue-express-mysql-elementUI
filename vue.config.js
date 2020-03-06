module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'index': '@/index',
        'backstage': '@/backstage'
      }
    }
  },
  pages: {
    index: {
      //页面的入口
      entry: './src/index/main.js',

      //页面的模板
      template: './public/index.html',

      //build时输出的文件名
      filename: 'index.html',

      //当使用title选项时
      title: '个人博客',

      //提取出来的通用chunk 和 vendor chunk
      chunks: ['chunk-vendors', 'chunk-common' , 'index']
    },
    backstage: {
      entry: './src/backstage/main.js',
      template: './public/backstage.html',
      filename: 'backstage.html',
      title: '博客后台',
      chunks: ['chunk-vendors', 'chunk-common' , 'backstage']
    }
  }
}