// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
// import modal from './components/addAsset'
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
// Vue.component('modal', modal)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
