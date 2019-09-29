/*
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-09-28 11:33:31
 * @Description: 
 */
import axios from 'axios';
import Qs from 'qs'
import { autoMatch, checkStatus } from './utils';
// import { Toast } from 'mint-ui';

const instance = axios.create({
  // baseURL: process.env.BASE_URL
  timeout: 300000, // 请求超时时间
  // 'transfromRequest' 允许在向服务器发送前， 修改请求数据
  transformRequest: [function (data) {
    // 对data进行任意转换处理
    return data;
  }],
  // 'transfromResponese'在传递then/catch前，允许修改相响应数据
  transformResponse: [function (data) {
    return JSON.parse(data);
  }]
})

// 实例添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做处理
  config.headers = Object.assign(config.method === 'get' ? {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=UTF-8'
  } : {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
  }, config.headers);
  
  if (config.method === 'post') {
    const contentType = config.headers['Content-Type']
    // 根据Content-Type转换data格式
    if (contentType) {
      if (contentType.includes('multipart')) {
        // 类型 'multipart/form-data;'
      } else if (contentType.includes('json')) {
        // 类型 'application/json;'
        config.data = JSON.stringify(config.data);
      } else {
        config.data = Qs.stringify(config.data)
      }
    }
  }
  return Promise.resolve(config);
}, function (error) {
  // 对请求做错误处理
  return Promise.reject(error)
})

// 实例添加响应拦截器
instance.interceptors.response.use(function (response) {
  return Promise.resolve(checkStatus(response))
}, function (error) {
  return Promise.reject(checkStatus(error.response))
})

const request = async function (opt) {
  try {
    const options = Object.assign({
      method: 'get',
      ifHandleError: true // 是否统一处理接口失败(提示)
    }, opt);
    // 匹配接口前缀 开发环境则通过proxy配置转发请求； 生产环境根据实际配置
    options.baseURL = autoMatch(options.prefix);

    const res = await instance(options);
    // console.log(res);
    if (!opt.ifHandleError) { // 自定义参数，是否允许全局提示错误信息
      // Toast(res.error || '请求处理失败！')
    }
    return res;
  } catch (err) {
    if (!opt.ifHandleError) { // 自定义参数，是否允许全局提示错误信息
      // Toast(err.msg || '请求处理失败！')
    }
    return err;
  }
}
