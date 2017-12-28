import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import LoginPage from '@/components/LoginPage'
import homePage from '@/components/homePage'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    // {
    //   path: '/',
    //   name: 'LoginPage',
    //   component: LoginPage
    // },
    {
      path: '/',
      name: 'homePage',
      component: homePage
    }
  ]
})
