import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.less'
Vue.filter('pluralize', (word, amount) => amount > 1 ? `${word}s` : word)

Vue.config.productionTip = false
Vue.config.silent = true

new Vue({
  render: h => h(App),
}).$mount('#app')
