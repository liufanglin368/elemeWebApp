import Vue from 'vue';
import Router from 'vue-router';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings.vue';
import seller from 'components/seller/seller';

Vue.use(Router); // Router1. 安装插件

const routes = [{ // Router2. 定义路由
  path: '/',
  redirect: '/goods'
}, {
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
}];

export default new Router({
   //去地址栏里的#号 mode: 'history',
    linkActiveClass: 'active',  // 设置router-link生成a标签的class   默认值还在???????
    routes
});
// Router3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。