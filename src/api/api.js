/*
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-09-27 16:53:03
 * @Description: 
 */
import {get,post} from './request';
// 登陆
export const  login= ()=>post('/api/post/user/login', {})
// 商品
export const  goodsList=()=>get('/api/product/list', {}) // 商品列表