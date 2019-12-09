import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts';
// 自主封装的axios
import axios from './api';
// 使用mockjs模拟数据，打包时请注释掉
import './api/mock';

Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
