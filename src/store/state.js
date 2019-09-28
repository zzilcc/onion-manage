/*
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-09-28 09:47:29
 * @Description: 
 */
const state = {
  token: '111',
  roles: [], // 用户角色
  goodsListRow: {
    productId: "", //  商品ID
    suppliesCode: "", //  物料代码
    suppliesName: "", // 物料名字（商品名字）
    intro: "", // 商品简介
    specification: "", // 商品规格
    unit: "", // 商品规格单位
    shelfLife: "", // 保质期
    bannerPicture: "", // banner图片路径
    listPicture: "", // 商品列表图片路径
    imageText: [], // 商品详情里的图文
    categoryId: "", // 分类ID
    brand: "", // 品牌
    efficacy: "", // 主要功效
    manufacturersName: "", // 生产厂家名字
    manufacturersAddress: "", // 生产厂家地址
    productionCertificate: "", // 生产许可证
    price: "", // 原价
    inventory: "", // 库存
    createId: "", // 创建人ID
    fileList: []
  },
  categoriesListRow: {
    "id": 1,
    "categoryName": "", // 分类名称
    "level": -1, // 分类等级
    "number": 0, // 商品数量
  }
} 
export default state