import Vue from 'vue'
import App from './App.vue'
import { FormModel,Input,Icon,Button,Checkbox   } from 'ant-design-vue';
import router from "./router"
import store from './store'
import './global.less' //引入全局less

require('./mock/index')


Vue.use(FormModel).use(Input).use(Icon).use(Button).use(Checkbox)




Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')


//Vue.use(Vuex)

// const stroe = new Vue.Store({
//     state: {
//         count:0,
//     },
//     mutations: {
//         increment(state) {
//             state.count++;
//         }
//     },
//     actions: {
//         //异步操作,dispatch调用
//         increment({state}) {
//             setTimeout(()=>{
//                 state.count++;
//             },300)
//         }
//     }
// })