import axios from 'axios'
import store from '../store'
import {baseURL, commentBaseURL, orderBaseURL, addressBaseURL} from '../../config/env'

axios.interceptors.response.use(response => {
  if (response.data.ErrorText === 'NO_ACCESS_TOKEN') {
    store.commit('LOG_OUT', 'LOG_OUT')
    window.location.href = 'http://sso.xzitv.com/index.php/Login/index'
  }
  return response
}, error => {
  return Promise.reject(error)
})

export default async (url = '', module = 'common', data = {}, method = 'get', config = {}) => {
  method = method.toLowerCase()
  const api = {
    comment: commentBaseURL,
    order: orderBaseURL,
    address: addressBaseURL
  }
  let baseurl = module === 'common' ? baseURL : api[module]
  let ajaxConfig = Object.assign({
    url,
    method,
    baseURL: baseurl
  }, config)
  if (['post', 'put', 'patch'].includes(ajaxConfig.method)) {
    ajaxConfig.data = data
  } else {
    ajaxConfig.params = data
  }
  try {
    const data = (await axios(ajaxConfig)).data
    return data
  } catch (error) {
    console.log('Error', error.message)
    throw error
  }
}
