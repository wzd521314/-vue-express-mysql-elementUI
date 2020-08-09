module.exports = {
  
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'blog': '@/views/blog',
        'background': '@/views/background',
        'login': '@/views/login',
        'network': '@/network',
        'utils': '@/utils'
      }
    }
  },
  pages: {
    index: {
      //页面的入口
      entry: './src/views/blog/main.js',

      //页面的模板
      template: './public/blog.html',

      //build时输出的文件名
      filename: 'index.html',

      //当使用title选项时
      title: '酷狗君の个人小站',

      //提取出来的通用chunk 和 vendor chunk
      chunks: ['chunk-vendors', 'chunk-common' , 'index']
    },
    background: {
      entry: './src/views/background/main.js',
      template: './public/background.html',
      filename: 'background.html',
      title: '博客后台管理',
      chunks: ['chunk-vendors', 'chunk-common' , 'background']
    },
    login: {
      entry: './src/views/login/main.js',
      template: './public/login.html',
      filename: 'login.html',
      title: '登录界面',
      chunks: ['chunk-vendors', 'chunk-common' , 'login']
    }
  },
  devServer: {
    publicPath: '/',
    proxy: {
      
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      },
      '/users': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/users': '/users'
        }
      }
    }
  },
}