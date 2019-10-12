/*
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-12 16:23:20
 * @Description: 
 */
let isDebugger = true
let hasApi = !isDebugger ? '/api' : ''
import {get,post} from './request';
// 登陆
export const  loginAxios = (param) => post(hasApi + '/user/login', param)
// 商品
export const goodsListAxios=(param)=>get(hasApi + '/product/list', param) // 商品列表
export const updateGoodsAxios=(param)=>post(hasApi + '/product/update', param) // 修改商品
export const updatePriceGoodsAxios=(param)=>post(hasApi + '/product/updatePrice', param) // 修改商品价格
export const addGoodsAxios=(param)=>post(hasApi + '/product/add', param) // 添加商品
export const deleteGoodsAxios=(param)=>post(hasApi + '/product/delete', param) // 删除商品
export const putawayGoodsAxios=(param)=>post(hasApi + '/product/putaway', param) // 商品上架
export const soldOutGoodsAxios=(param)=>post(hasApi + '/product/soldOut', param) // 商品下架
// 分类
export const categoryListAxios=(param)=>get(hasApi + '/category/pro/list', param) // 分类列表
export const addCategoryAxios=(param)=>post(hasApi + '/category/pro/add', param) // 添加分类
export const deleteCategoryAxios=(param)=>post(hasApi + '/category/pro/delete', param) // 删除分类
export const updateCategoryAxios=(param)=>post(hasApi + '/category/pro/updatet', param) // 更新分类
export const getTreeCategoryAxios=(param)=>post(hasApi + '/category/getTreeCategory', param) // 获取分类树
// 订单
export const placeOrderAxios=(param)=>get(hasApi + '/placeOrder', param) // admin端提交订单接口
export const fileUploadListAxios=(param)=>post(hasApi + '/fileUploadList', param) // oss上传图片多张
export const fileUploadAxios=(param)=>post(hasApi + 'api/fileUpload', param) // oss上传阿里云图片(单张)
export const deleteOrderAxios=(param)=>post(hasApi + '/deleteOrder', param) // 取消订单接口
export const getAOPDAxios=(param)=>get(hasApi + '/getAOPD', param) // 后台管理系统查询订单详情
export const getAdminOrderListAxios=(param)=>post(hasApi + '/getAdminOrderList', param) // 后台管理系统订单列表查询
// 积分
export const integralGoodsListAxios = (param) => get(hasApi + '/integralGoods/list', param) // 查询积分商品列表
export const soldOutIntegralGoodsAxios = (param) => post(hasApi + '/integralGoods/soldOut', param) // 下架积分商品
export const putawayIntegralGoodsAxios = (param) => post(hasApi + '/integralGoods/putaway', param) // 上架积分商品
export const deleteIntegralGoodsAxios = (param) => post(hasApi + '/integralGoods/delete', param) // 删除积分商品
export const updateIntegralGoodsAxios = (param) => post(hasApi + '/integralGoods/update', param) // 修改积分商品
export const addIntegralGoodsAxios = (param) => post(hasApi + '/integralGoods/add', param) // 添加积分商品列表
export const getIntegralGoodsAxios = (param) => get(hasApi + '/integralGoods/get', param) // 根据id查询积分商品
// 积分订单相关接口
export const getAdminIntegralOrderList = (param) => post(hasApi + '/getAdminIntegralOrderList', param) // 积分商城查询订单列表接口
// 设置相关接口
export const getDiscountsrList = (param) => post(hasApi + '/post/list', param) // 职务获取折扣列表
export const updateDiscountsrList = (param) => post(hasApi + '/post/update', param) // 修改职务折扣列表
export const getEventeventList = (param) => get(hasApi + '/activite/get', param) // 活动说明列表
export const updateEventeventList = (param) => post(hasApi + '/activite/update', param) // 修改活动说明
// 会员
export const getMemberManageList = (param) => post(hasApi + '/getMemberList', param) // 获取会员列表
export const editMemberManageList = (param) => post(hasApi + '/editMember', param) // 编辑会员列表
export const editIntegration = (param) => post(hasApi + '/editIntegration', param) // 积分充值 编辑
export const placeMemberOrder = (param) => post(hasApi + '/placeMemberOrder', param) // 续充
export const getMemberLevelList = (param) => post(hasApi + '/getMemberLevelList', param) // 获取会员等级列表
export const editMemberLevel = (param) => post(hasApi + '/editMemberLevel', param) // 编辑会员等级
export const deleteMemberLevel = (param) => get(hasApi + '/deleteMemberLevel', param) // 删除会员等级
export const placeMemberLevelOrder = (param) => post(hasApi + '/placeMemberLevelOrder', param) // 会员充值方案分享下单
export const getMemberLevelBox = (param) => get(hasApi + '/getMemberLevelBox', param) // 获取会员等级下拉框
