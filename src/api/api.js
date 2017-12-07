import Vue from 'vue'
import qs from 'qs'
import http from './http'
// import getCookie from './getCookie'
const token = getCookie('user', 'access_token')
// const token = '2e43503c10f4eb706c4aa191ac197aad'
const addressURL = 'http://mobile.xzitv.cn/aitexizang/'

// 所有分类
export const getCategoryAll = () => http('?m=Apigroupbuy&c=category&a=category_all')

// 搜索条件
export const searchType = () => http('?m=Apigroupbuy&c=business&a=search_type')

// 热词展示
export const getHotKey = () => http('?m=Apigroupbuy&c=hotwords&a=show')

// 首页推荐商品列表
export const goodsShow = () => http('?m=Apigroupbuy&c=category&a=goodsShow')

// 首页推荐商家
export const sellerShow = () => http('?m=Apigroupbuy&c=business&a=show&orderby=weight&count=12')

// 商家列表筛选
export const sellerSort = (fid, aid, order, page, size) => http('?m=Apigroupbuy&c=business&a=show_page&fid=' + fid + '&aID=' + aid + '&orderby=' + order + '&offset=' + page + '&count=' + size)

// 商家列表搜索
export const sellerSearch = (fid, aid, order, key, page, size) => http('?m=Apigroupbuy&c=business&a=show_page&fid=' + fid + '&aID=' + aid + '&orderby=' + order + '&title=' + key + '&offset=' + page + '&count=' + size)

// 商家详情
export const sellerInfo = (id) => http('?m=Apigroupbuy&c=business&a=detail_cat&id=' + id)

// 商品详情
export const prdInfo = (id) => http('?m=Apigroupbuy&c=goods&a=detail_cat&id=' + id + '&access_token=' + token)

// 商品图文详情
export const prdInfoPics = (id, type) => http('?m=Apigroupbuy&c=goods&a=Slideshow&type_id=' + id + '&istype=' + type)

// 商品评论
export const prdComment = (id) => http('?m=Apicomment&c=comment&a=show&bundle_id=groupbuy&module_id=groupbuy&content_id=' + id, 'comment')

// 商品添加／取消收藏
// eslint-disable-next-line camelcase
export const addToCollect = (id, type, is_del) => http('?m=Apigroupbuy&c=collect&a=collect&id=' + id + '&type=' + type + '&is_del=' + is_del + '&access_token=' + token)

// 我的收藏
export const collectList = (page, size) => http('?m=Apigroupbuy&c=collect&a=show_page&type=0&access_token=' + token + '&offset=' + page + '&count=' + size)

// 取消收藏
export const collectCancel = (params) => http('?m=Apigroupbuy&c=collect&a=delete&access_token=' + token, 'common', qs.stringify(params), 'post')

// 评价请求
export const commentRequest = (params) => http('?m=Apicomment&c=comment&a=create&access_token=' + token, 'comment', qs.stringify(params), 'post')

// 下单
export const setOrder = (params) => http('?m=Apiorder&c=order&a=setOrder&access_token=' + token, 'order', qs.stringify(params), 'post')

// 订单查询
export const orderQuery = (number) => http('?_menu_id=3&m=Apiorder&c=order&a=detail&order_number=' + number + '&access_token=' + token)

// 我的订单
export const orderList = (params, page, size) => http('?_menu_id=3&m=Apiorder&c=order&a=show_page&moduleName=groupbuy&bundleName=groupbuy&access_token=' + token + '&offset=' + page + '&count=' + size, 'order', qs.stringify(params), 'post')

// 我的评论
export const commentList = (page, size) => http('?m=Apicomment&c=comment&a=show&bundle_id=groupbuy&module_id=groupbuy&show_my=1&access_token=' + token + '&offset=' + page + '&count=' + size, 'comment')

// 我的评论总数
export const commentListNum = () => http('?m=Apicomment&c=comment&a=count&bundle_id=groupbuy&module_id=groupbuy&show_my=1&access_token=' + token, 'comment')

// 获取支付方式
export const getPayWay = () => http('?m=Apiorder&c=payconfig&a=show&access_token=' + token, 'order')

// 支付
export const confirmPay = (params) => http('?m=Apiorder&c=order&a=bill&access_token=' + token, 'order', qs.stringify(params), 'post')

// 添加地址
// export const addAddress = (params) => http('addContactUser.php?access_token=' + token, 'address', qs.stringify(params), 'post')

// 添加地址jsonp
export const addAddress = addressURL + 'addContactUser.php?access_token=' + token

// 修改地址
// export const editAddress = (params) => http('editContactUser.php?access_token=' + token, 'address', qs.stringify(params), 'post')

// 修改地址jsonp
export const editAddress = addressURL + 'editContactUser.php?access_token=' + token

// 删除地址
// export const deleteAddres = (params) => http('deleteContactUser.php?access_token=' + token, 'address', qs.stringify(params), 'post')

// 删除地址jsonp
export const deleteAddres = addressURL + 'deleteContactUser.php?access_token=' + token

// 获取地址
// export const getAddress = () => http('showContactUser.php?access_token=' + token, 'address')

// 获取地址jsonp
export const getAddress = addressURL + 'showContactUser.php?access_token=' + token

// 全国各省
export const getProvince = () => http('?m=Apigroupbuy&c=address&a=provinceShow')

// 省级对映市
export const getCity = (id) => http('?m=Apigroupbuy&c=address&a=cityShow&province_id=' + id)

// 市级对映区
export const getArea = (id) => http('?m=Apigroupbuy&c=address&a=areaShow&city_id=' + id)

Vue.mixin({
  beforeCreate () {
    const options = this.$options
    if (options.api) {
      this.$api = options.api
    } else if (options.parent && options.parent.$api) {
      this.$api = options.parent.$api
    }
  }
})
