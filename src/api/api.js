/*
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-09-27 19:39:23
 * @Description: 
 */
import {get,post} from './request';
// 登陆
export const  login= ()=>post('/api/post/user/login', {})
// 商品
export const  goodsList=(param)=>get('/api/product/list', param) // 商品列表
export const  updateGoods=(param)=>get('/api/product/update', param) // 修改商品
export const  updatePriceGoods=(param)=>get('/api/product/updatePrice', param) // 修改商品价格
export const  addGoods=(param)=>get('/api/product/add', param) // 添加商品
export const  deleteGoods=(param)=>get('/api/product/delete', param) // 删除商品
export const  putawayGoods=(param)=>get('/api/product/putaway', param) // 商品上架
export const  soldOutGoods=(param)=>get('/api/product/soldOut', param) // 商品下架
// 分类
export const  categoryList=(param)=>get('/api/category/pro/list', param) // 分类列表
export const  addCategory=(param)=>get('/api/category/pro/add', param) // 添加分类
export const  deleteCategory=(param)=>get('/api/category/pro/delete', param) // 删除分类
export const  updateCategory=(param)=>get('/api/category/pro/updatet', param) // 更新分类