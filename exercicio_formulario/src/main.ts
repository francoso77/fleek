import Vue from 'vue'
import App from './App.vue'
import VueTheMask from 'vue-the-mask'
import validaCampos from './classes/ClsValidaCampos'

Vue.use(VueTheMask, validaCampos)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
