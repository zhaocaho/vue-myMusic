// 这是项目发布阶段所需要用到的babel插件
const prodPlugins = []
// process.env.NODE_ENV 是得到项目是在开发环境还是在发布环境的运行,开发环境是 vue-cli-service serve --mode development --dashboard,development.   发布环境是 prodaction
if (process.env.NODE_ENV === 'prodaction') {
  prodPlugins.push('transform-remove-console')
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    // [
    //   'component',
    //   {
    //     libraryName: 'element-ui',
    //     styleLibraryName: 'theme-chalk'
    //   }
    // ],
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ],
    // 发布产品需要的插件数组，用展开运算符
    ...prodPlugins,
    // 路由懒加载所依赖的插件
    '@babel/plugin-syntax-dynamic-import'
  ]
}
