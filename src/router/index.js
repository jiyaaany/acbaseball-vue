import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home';
import Notices from '@/components/Notices';
import Schedule from '@/components/Schedule';
import AccountsDetail from '@/components/AccountsDetail';
import AccountsRegister from '@/components/AccountsRegister';

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
    path: '/accounts/detail',
    name: 'AccountsDetail',
    component: AccountsDetail
  },
  {
    path: '/accounts/register',
    name: 'AccountsRegister',
    component: AccountsRegister
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
