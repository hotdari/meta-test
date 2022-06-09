import Vue from 'vue'
import App from './App.vue'
import Meta from 'vue-meta'
Vue.config.productionTip = false

Vue.use(Meta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid',
  refreshOnceOnNavigation: true
})

new Vue({
  render: h => h(App),
}).$mount('#app')

