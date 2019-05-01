import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import(/* webpackChunkName: "account" */ './views/Account.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import(/* webpackChunkName: "admin" */ './views/Admin.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard.vue')
    }
  ]
})
