import Vue from 'vue'
import App from './App.vue'
import { Form,Input,Icon,Button,Checkbox   } from 'ant-design-vue';
import router from "./router";
import './global.less' //引入全局less


Vue.use(Form).use(Input).use(Icon).use(Button).use(Checkbox)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
