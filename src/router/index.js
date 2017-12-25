import Vue from 'vue'
import Router from 'vue-router'
import findRouters from './find'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/find'
    },
    {
      path: '/find',
      name: 'Find',
      redirect: '/find/recommend',
      component: resolve => require(['@/pages/find/layout'], resolve),
      children: findRouters
    },
    {
      path: '/fm',
      name: 'Fm',
      component: resolve => require(['@/pages/fm'], resolve)
    }
  ]
})
