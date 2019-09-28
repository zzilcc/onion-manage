/*
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-09-28 09:46:35
 * @Description:
 */
const getters = {
  roles:state => {
    return state.roles
  },
  goodsListRow: state => {
    return state.goodsListRow
  },
  categoriesListRow: state => {
    return state.categoriesListRow
  }
}
export default getters