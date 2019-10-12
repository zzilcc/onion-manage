/*
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-12 11:56:42
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
  },
  categoryTreeData: state => {
    return state.categoryTreeData
  },
  orderDetail: state => {
    return state.orderDetail
  },
  pointsMallListRow: state => {
    return state.pointsMallListRow
  },
  memberLevelRow: state => {
    return state.memberLevelRow
  },
  memberInfo: state => {
    return state.memberInfo
  }
}
export default getters