// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'	//ajax1.导入
import App from './App'
import router from './router/index.js'

import 'common/less/index.less'  //引入公共样式

Vue.use(VueResource);	//ajax2.安装插件



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,	//5 Router 挂载实例
  render: h => h(App)		//render 函数
});
