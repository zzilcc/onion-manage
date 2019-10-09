/*
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-09 17:46:46
 * @Description: 
 */
// import {
//   myRouter
// } from '@/router/router'
import  * as types from './type.js'
import { STATUS_CODES } from 'http'
const mutations = {
  // 保存token
  [types.LOGIN]: (state, value) => {
    state.token = value
  },
  [types.USERINFO]: (state, value) => {
    state.userInfo = value
  },
  [types.LOGINSTATUS]: (state, value) => {
    state.loginStatus = value
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
  },
  memberLevelRow(state, object) {
    state.memberLevelRow = object
  }
}
export default mutations