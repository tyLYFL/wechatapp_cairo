// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueResource from 'vue-resource'
import util from './assets/conmmon/util'
import store from './vuex/store'

import Qiniu from 'qiniu-js'
import $ from 'jquery'

Vue.prototype.util = util
Vue.config.productionTip = false
Vue.use(VueAxios,axios)
// Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
