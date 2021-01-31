# antd-demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Note
```
yarn add babel-plugin-import --dev
yarn add ant-design-vue
yarn add less less-loader --dev
yarn add vue-router --save
yarn global add webpack
```
按需加载 需要vue.config.js中多加配置
```
css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true
                }
          }
        }
    }
```