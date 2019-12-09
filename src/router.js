import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/policePortraitHome', //民警画像路由
      name: 'policePortraitHome',
      component: () => import('./views/policePortrait/policePortraitHome.vue'),
      children: [
        {
          path: '/', //民警画像路由
          redirect: 'myPortrait'
        },
        {
          path: 'myPortrait', //我的画像路由
          name: 'myPortrait',
          component: () => import('./views/policePortrait/myPortrait.vue')
        }
      ]
    },
    {
      path: '/teamAnalysisHome', //队伍综合评估路由
      name: 'teamAnalysisHome',
      component: () => import('./views/teamAnalysis/teamAnalysisHome.vue'),
      children: [
        {
          path: '/', //队伍综合评估路由Team comprehensive assessment
          redirect: 'teamAnalysisAssessment'
        },
        {
          path: 'teamAnalysisAssessment', //队伍人员画像对比路由
          name: 'teamAnalysisAssessment',
          component: () =>
            import('./views/teamAnalysis/teamAnalysisAssessment.vue')
        }
      ]
    },
    {
      path: '*',
      component: () => import(/* webpackChunkName: "about" */ './views/404.vue')
    }
  ]
});
