/*
 * @Author: whisperer
 * @Date: 2019-08-02 13:45:37
 * @LastEditors: whisperer
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'


Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
