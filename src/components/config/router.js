/*
 * @Author: whisperer
 * @Date: 2019-08-14 15:13:48
 * @LastEditors: whisperer
 * @Description: 
 */
import VueRouter from 'vue-router';
//引入路由对应的组件
// import Markdown from '../route/markdown.vue';
// import Test from '../route/test.vue';
const Markdown = () => import('@route/markdown.vue');
const Test = () => import('@route/test.vue');

const routes = [
    { path: '*', component: Markdown },
    { path: '/test', component: Test }
];

const router = new VueRouter({
    routes 
})

export default router;