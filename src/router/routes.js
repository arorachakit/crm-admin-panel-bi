
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/login' },
      { path: 'dashboard-one', component: () => import('pages/Dashboard_one.vue')},
      { path: 'dashboard-two', component: () => import('pages/Dashboard_two.vue')},
    ]
  },
  { path: '/login', component: () => import('pages/Login.vue') },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
