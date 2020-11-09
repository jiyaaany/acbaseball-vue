import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import Notices from '@/views/Notices';
import Schedule from '@/views/Schedule';
import AccountDetail from '@/views/AccountDetail';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/notice/list',
    name: 'Notices',
    component: Notices
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/account/detail',
    name: 'AccountDetail',
    component: AccountDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
