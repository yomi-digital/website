import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueI18n from 'vue-i18n'


Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(VueI18n)

new Vue({
  render: h => h(App),
}).$mount('#app')
