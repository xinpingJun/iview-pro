import Vue from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import store from './store/'

import iView from 'iview';
import 'iview/dist/styles/iview.css';
// import './assets/theme/index.less'
Vue.use(iView);

// 拖拽插件
import Vddl from 'vddl';
Vue.use(Vddl);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
