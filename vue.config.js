const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      // .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('css', resolve('src/assets/css'))
      .set('store', resolve('src/store'))
    //   发布模式（利用的config.when来判读是什么模式）
    config.when(process.env.NODE_ENV === 'production', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-prod.js')
      //只有在发布的阶段引入开不CDN资源，有小横线的用的引号
      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        axios: 'axios',
        nprogress: 'NProgress'
        // vuex: 'Vuex'
      })
      // 调用html插件的tap===>用来根据isProd的值来决定用什么标题，或者是否引用外部资源
      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
    })
    config.when(process.env.NODE_ENV === 'development', config => {
      // 开发模式
      config
        .entry('app')
        .clear()
        .add('./src/main-dev.js')
      // 调用html插件的tap===>用来根据isProd的值来决定用什么标题，或者是否引用外部资源
      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
  },
  // assets的体积，和入口文件
  configureWebpack: {
    performance: {
      hints: 'warning',
      //入口起点的最大体积 整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      //生成文件的最大体积 整数类型（以字节为单位 300k）
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js')
      }
    }
  }
}
