module.exports={
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true,
                    math: 'always' //在最新版本中numerator不受支持，math设为always可以兼容版本3的操作，否则使用style:true会报错
                }
          }
        }
    }
};