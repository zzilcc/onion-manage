/*
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-09-30 10:50:09
 * @Description: 
 */
// import {
//   myRouter
// } from '@/router/router'
const mutations = {
  // 保存token
  COMMIT_TOKEN(state, object) {
    state.token = object.token
  },
  goodsListRow(state, object) {
    state.goodsListRow = object
  },
  categoriesListRow(state, object) {
    state.categoriesListRow = object
  },
  categoryTreeData(state, object) {
    state.categoryTreeData = object
  },
  orderDetail(state, object) {
    state.orderDetail = object
  },
  pointsMallListRow(state, object) {
    state.pointsMallListRow = object
  }
}
export default mutations