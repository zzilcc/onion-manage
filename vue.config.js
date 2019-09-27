/*
 * @Description: In User Settings Editco
 * @Author: your name
 * @Date: 2019-09-25 14:15:13
 * @LastEditTime: 2019-09-26 15:05:13
 * @LastEditors: Please set LastEditors
 */
let path = require("path");
//去console插件
// const TerserPlugin = require("terser-webpack-plugin");
//打包分析
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const cdnPlugin = require("webpack-cdn-plugin");

function resolve(dir) {
  return path.join(__dirname, dir);
}

//对一些不经常改动的库，可以通过cdn引入，webpack不对他们打包
let externals = {
  vue: "Vue",
  axios: "axios",
  "element-ui": "ELEMENT",
  "vue-router": "VueRouter",
  vuex: "Vuex",
};
module.exports = {
  //基本路径
  publicPath: "/dist/",
  //输出文件目录
  outputDir: "dist",
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: "static",
  //生产环境不需要生产map文件
  productionSourceMap: false,
  chainWebpack: config => {
    //这里是对环境的配置，不同的环境对应不同的BASE_URL
    config.plugin("define").tap(args => {
      args[0]["process.env"].VUE_APP_LOGOUT_URL = JSON.stringify(
        process.env.VUE_APP_LOGOUT_URL
      );
      console.log(args[0]);
      return args;
    });

    //只在生产环境生效
    if (process.env.VUE_APP_CURRENTMODE === "production") {
      config.externals(externals);
      config.optimization.minimize(true);
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          public: {
            name: "public",
            test: resolve("src/components"),
            minSize: 0, //表示在压缩前的最小模块大小,默认值是 30kb
            minChunks: 2, // 最小公用次数
            priority: 5, // 优先级
            reuseExistingChunk: true // 公共模块必开启
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          }
        }
      });
    }
    //设置别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@api", resolve("src/api/api")) //接口地址
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"));
  },
  devServer: {
    port: 9090, // 端口
    open: true, // 自动开启浏览器
    compress: false, // 开启压缩
    overlay: {
      warnings: true,
      errors: true
    }
  },
  //定义scss全局变量
  // css: {
  //   // 是否使用css分离插件 ExtractTextPlugin
  //   extract: true,
  //   // 开启 CSS source maps?
  //   sourceMap: false,
  //   // loaderOptions: {
  //   //   sass: {
  //   //     data: `@import "@/assets/scss/global.scss";`
  //   //   }
  //   // }
  // }
};