import 'mutationobserver-shim'
import Vue from 'vue'
import { CarouselPlugin, IconsPlugin, FormCheckboxPlugin, ButtonPlugin  } from 'bootstrap-vue'

// Bootstrap CSS (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// custom css
import '@/assets/css/w3.css'
import '@/assets/css/style.css'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = true
Vue.use(CarouselPlugin)
Vue.use(IconsPlugin)
Vue.use(FormCheckboxPlugin)
Vue.use(ButtonPlugin )

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
