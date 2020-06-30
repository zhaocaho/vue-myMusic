// 发起ajax请求的函数

import axios from 'axios'
import { Notify } from 'vant'

// 成功状态码
export const SUCCESS = 200
/**
 *
 * @param {String} url  请求路径
 * @param {Object} data 请求参数
 */
export function useAxios(url, data) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params: data })
      .then(result => {
        resolve(result)
      })
      .catch(err => {
        reject(err)
        console.log(err)
        Notify('请检查您的网络')
      })
  })
}
