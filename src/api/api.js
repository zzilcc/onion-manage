/*
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-09 19:47:06
 * @Description: 
 */
import {get,post} from './request';
// 登陆
export const  loginAxios = (param) => post('api/user/login', param)
// 商品
export const goodsListAxios=(param)=>get('/api/product/list', param) // 商品列表
export const updateGoodsAxios=(param)=>post('/api/product/update', param) // 修改商品
export const updatePriceGoodsAxios=(param)=>post('/api/product/updatePrice', param) // 修改商品价格
export const addGoodsAxios=(param)=>post('/api/product/add', param) // 添加商品
export const deleteGoodsAxios=(param)=>post('/api/product/delete', param) // 删除商品
export const putawayGoodsAxios=(param)=>post('/api/product/putaway', param) // 商品上架
export const soldOutGoodsAxios=(param)=>post('/api/product/soldOut', param) // 商品下架
// 分类
export const categoryListAxios=(param)=>get('/api/category/pro/list', param) // 分类列表
export const addCategoryAxios=(param)=>post('/api/category/pro/add', param) // 添加分类
export const deleteCategoryAxios=(param)=>post('/api/category/pro/delete', param) // 删除分类
export const updateCategoryAxios=(param)=>post('/api/category/pro/updatet', param) // 更新分类
export const getTreeCategoryAxios=(param)=>post('/api/category/getTreeCategory', param) // 获取分类树
// 订单
export const placeOrderAxios=(param)=>get('/api/placeOrder', param) // admin端提交订单接口
export const fileUploadListAxios=(param)=>post('/api/fileUploadList', param) // oss上传图片多张
export const fileUploadAxios=(param)=>post('/fileUpload', param) // oss上传阿里云图片(单张)
export const deleteOrderAxios=(param)=>post('/api/deleteOrder', param) // 取消订单接口
export const getAOPDAxios=(param)=>post('/api/getAOPD', param) // 后台管理系统查询订单详情
export const getAdminOrderListAxios=(param)=>post('/api/getAdminOrderList', param) // 后台管理系统订单列表查询
// 积分
export const integralGoodsListAxios = (param) => get('/api/integralGoods/list', param) // 查询积分商品列表
export const soldOutIntegralGoodsAxios = (param) => post('/api/integralGoods/soldOut', param) // 下架积分商品
export const putawayIntegralGoodsAxios = (param) => post('/api/integralGoods/putaway', param) // 上架积分商品
export const deleteIntegralGoodsAxios = (param) => post('/api/integralGoods/delete', param) // 删除积分商品
export const updateIntegralGoodsAxios = (param) => post('/api/integralGoods/update', param) // 修改积分商品
export const addIntegralGoodsAxios = (param) => post('/api/integralGoods/add', param) // 添加积分商品列表
export const getIntegralGoodsAxios = (param) => get('/api/integralGoods/get', param) // 根据id查询积分商品
// 积分订单相关接口
export const getAdminIntegralOrderList = (param) => post('/api/getAdminIntegralOrderList', param) // 积分商城查询订单列表接口