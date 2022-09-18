import Vue from 'vue'
import App from './App.vue'
import VueTheMask from 'vue-the-mask'
import ClsValidaCampos from './classes/ClsValidaCampos'




Vue.use(VueTheMask, ClsValidaCampos)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
