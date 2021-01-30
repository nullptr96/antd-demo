import Vue from 'vue'
import App from './App.vue'
import { FormModel,Input,Icon,Button   } from 'ant-design-vue';
import router from "./router";


Vue.use(FormModel)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
