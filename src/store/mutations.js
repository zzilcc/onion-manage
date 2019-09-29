/*
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-09-28 09:46:56
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
  }
}
export default mutations