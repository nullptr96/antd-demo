import Vue from 'vue'
import App from './App.vue'
import { FormModel,Input,Icon,Button,Checkbox   } from 'ant-design-vue';
import router from "./router";
import './global.less' //引入全局less

require('./mock/index')


Vue.use(FormModel).use(Input).use(Icon).use(Button).use(Checkbox)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
