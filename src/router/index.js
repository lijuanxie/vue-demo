import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import LoginPage from '@/components/LoginPage'
import manage from '@/components/manage'
import index from '@/components/index'
import sort from '@/components/sort'
import assetReturn from '@/components/return'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: 'index',
      name: 'index',
      component: index,
      children : [
        {
          path: 'index/manage',
          name: 'manage',
          component: manage
        },
        {
          path: 'index/sort',
          name: 'sort',
          component: sort
        },
        {
          path: 'return',
          name: 'return',
          component: assetReturn
        }
      ]
    },



  ]
})
