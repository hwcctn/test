const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0', // 默认是localhost
    port: 8080, // 前端项目编译后使用的端口号，跟webpack配置的port同理
    proxy: {
      '/api': {
        
        target: 'https://autumnfish.cn',//<url>指的是产生跨域的地址，是需要改变的
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/',
        }
      }
    }
}
})
