export default [
  {
    path: 'recommend',
    component: resolve => require(['@/pages/find/recommend'], resolve)
  },
  {
    path: 'songlist',
    component: resolve => require(['@/pages/find/songlist'], resolve)
  },
  {
    path: 'radio',
    component: resolve => require(['@/pages/find/radio'], resolve)
  },
  {
    path: 'ranking',
    component: resolve => require(['@/pages/find/ranking'], resolve)
  },
  {
    path: 'singer',
    component: resolve => require(['@/pages/find/singer'], resolve)
  },
  {
    path: 'newest',
    component: resolve => require(['@/pages/find/newest'], resolve)
  }
]
