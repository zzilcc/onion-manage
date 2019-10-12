/*
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-12 10:58:04
 * @Description: 
 */
import axios from "axios";
import router from "../router/router";
// import {messages} from '../assets/js/common.js'
import store from '../store/store'
axios.defaults.timeout = 6000000;
// axios.defaults.baseURL = "http://tadmin.yuxinhz.cn";
axios.defaults.baseURL = "http://192.168.1.161:8102";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
let loading = null;

/*
 *请求前拦截
 *用于处理需要请求前的操作
 */
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers["Authorization"] = "Bearer " + store.state.token;
      config.headers["Token"] = store.state.token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
/*
 *请求响应拦截
 *用于处理数据返回后的操作
 */
axios.interceptors.response.use(
    response => {
      return new Promise((resolve, reject) => {
        //请求成功后关闭加载框
        if (loading) {
          // loading.close();
        }
        const res = response.data;
        if (res.code === 200 && res.message === "success") {
          resolve(res)
        } else {
          reject(res)
        }
      })
      .catch(error => {
          console.log(error)
          const status = error.code;
          switch (status) {
            case '401':
              // messages("warning", "用户登陆过期，请重新登陆");
              router.replace({
                path: "/login",
              });
              break;
            case '10006':
              // 请求头无token
              router.replace({
                path: "/login",
              });
              break;
            default:
              break;
          }
      })
})
  /*
   *get方法，对应get请求
   *@param {String} url [请求的url地址]
   *@param {Object} params [请求时候携带的参数]
   */
  export function get(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
/*
 *post方法，对应post请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
}