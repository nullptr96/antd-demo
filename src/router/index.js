import Vue from "vue";
import VueRouter from "vue-router";
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
Vue.use(VueRouter);

export default new VueRouter({
    //路由，传入3个内容：路径，名称，组件
    routes: [
        {
          path: '/',
          redirect: '/login'
        },
        {
          path: '/login',
          name: 'login', // 路由名称
          component: Login // 组件对象
        },
        {
            path: '/home',
            name: 'home', // 路由名称
            component: Home // 组件对象
        }
      ]
});