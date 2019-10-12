/*
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-12 11:55:26
 * @Description: 
 */
const state = {
  token: window.localStorage.getItem('token'),
  userInfo: {},
  loginStatus: false,
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
    category: '', // 所属分类
    efficacy: "", // 主要功效
    manufacturersName: "", // 生产厂家名字
    manufacturersAddress: "", // 生产厂家地址
    productionCertificate: "", // 生产许可证
    price: 0, // 原价
    inventory: 0, // 库存
    createId: "", // 创建人ID
    fileList: []
  },
  categoriesListRow: {
    "id": '',
    "categoryName": "", // 分类名称
    "level": '一级分类', // 分类等级
    "number": 0, // 商品数量
    "parentCategoryName": '', // 父级分类名称
    "parentId": '0', // 父级分类id
    pageSize: 2,
    pageNum: 1
  },
  categoryTreeData:[ // 分类树
    {
      categoryId: "",
      categoryName: "",
      children: [],
      level: "",
      parentId: "0"
    }
  ],
  orderDetail: {
    orderId: '', // 订单id
    orderStatus: '' // 订单状态
  }, 
  pointsMallListRow: {
    bannerPicture: "string", //
    details: null, //
    id: "25779fc1d2cd493eaba881a1ca0f3fe4", //
    imageText: "string", //
    integral: 900, //
    inventory: null, //
    limitNumber: 0, //
    listPicture: "string", //
    name: "stringzzzzz啧啧啧1", //
    putawayStatus: 0, //
    sort: 0, //
    status: 0, //
    createTime: ''
  },
  memberLevelRow: {
    levelNum: "",
    levelName: "",
    rechargeAmount: "",
    discount: "",
    integralRatio: "",
    upgradeAmount: "",
    description: ""
  },
  memberInfo: {
    
  }
} 
export default state