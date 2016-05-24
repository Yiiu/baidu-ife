# 问卷调查单页-vue(完成)

至此百度前端学院2016春季任务已全部完成，完结撒花～～～～

### 情况：

##### 技术栈：

* vue,vue-router,webpack

##### 完成度：90%

### 结构： 

<pre>
.
├─ dist                   // 编译文件
├─ src                    //
│   ├─ components
│   │   ├─ date.vue       // 时间模块
│   │   ├─ echarts.vue    // echarts
│   │   ├─ n_title.vue    // 一个h1模块
│   │   ├─ pops.vue    // 弹出窗模块
│   │   ├─ list.vue       // 列表页面
│   │   ├─ home.vue       // 首页页面
│   │   ├─ nav.vue        // 头部页面
│   │   ├─ edit.vue       // 修改页面
│   │   ├─ 404.vue        // 404页面
│   │   ├─ new.vue        // 新建页面
│   │   ├─ app.vue        // app页面
│   │   └─ details.vue    // 详情页面
│   ├─ data.js            // 数据处理
│   └─ main.js            // 入口
├─ index.html
├─ package.json
├─ webpack.config.js

</pre>

##### package.json:

<pre>
"devDependencies": {
    "babel-core": "^6.8.0",
    "babel-loader": "^6.2.4",
    "babel-plugin-transform-runtime": "^6.8.0",
    "babel-preset-es2015": "^6.6.0",
    "babel-preset-stage-0": "^6.5.0",
    "css-loader": "^0.23.1",
    "vue-hot-reload-api": "^1.3.2",
    "vue-html-loader": "^1.2.2",
    "vue-loader": "^8.3.1",
    "vue-style-loader": "^1.0.0",
    "webpack": "^1.13.0"
},
"dependencies": {
    "echarts": "^3.1.10",
    "vue": "^1.0.24",
    "vue-router": "^0.7.13"
}
</pre>

##### webpack.config.js:

<pre>
module: {
    loaders: [
        {test: /\.vue$/ , loader: "vue"},
        { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        { test: /\.css$/, loader: 'style!css!autoprefixer'},
    ]
},
</pre>