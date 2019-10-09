/*
 * @Author: 黄紫茜
 * @Date: 2019-09-27 14:46:04
 * @LastEditors: 黄紫茜
 * @LastEditTime: 2019-10-09 14:59:17
 * @Description: 
 */
import axios from 'axios';
import * as types from './type.js';
import { loginAxios } from '../api/api.js';
const actions = {
  toLogin ({ commit }, info) {
    return new Promise((resolve, reject) => {
      loginAxios(info).then(res => {
        commit(types.LOGIN, res.obj.token)
        commit(types.LOGINSTATUS, true)
        commit(types.USERINFO, res.obj.user)
        let instance = axios.create({
          baseURL: process.env.NODE_ENV === 'production' ? 'http://tadmin.yuxinhz.cn' : 'http://tadmin.yuxinhz.cn'
        })
        instance.defaults.headers.common['authorization'] = 'Bearer' + res.obj.token
        window.localStorage.setItem('token', res.obj.token)
        resolve(res)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },
  logOut({commit}) {
    return new Promise((resolve, reject) => {
      commit(types.USERINFO, null)
      commit(types.LOGINSTATUS, false)
      commit(types.LOGIN, '')
      window.localStorage.removeItem('token')
    })
  }
}
export default actions