# my-vue-music

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# 组件

## 图片布局组件

PicLayout :
            title:标题，                字符串
            data:图片数据源              数组
            PicLayout:图片键值名        字符串
            desProp：图片描述键值名     字符串
            picNum:一排放几张图片       数字字符串
            renderNum：渲染几条数据     数字字符串

Swipe     :
            css:容器的样式，可以调节高度                                       对象
            boxCss:内容的宽度，可以调节一个屏幕内放多宽的内容，自定义滑块宽度     对象
            imgCss：图片的宽度，可以调节滑块宽度内图片占对少，然后写文字          对象
            已经有了slot,可以自定义当需要内容的时候