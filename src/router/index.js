import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: resolve => require(['@/pages/index'], resolve)
    },
    {
      path: '/fm',
      name: 'Fm',
      component: resolve => require(['@/pages/fm'], resolve)
    }
  ]
})
