import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      hasNavBar: false,
    },
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import('../views/Details.vue'),
    meta: {
      hasNavBar: true,
    },
  },
  {
    path: '/deposit',
    name: 'Deposit',
    component: () => import('../views/Deposit.vue'),
    meta: {
      hasNavBar: true,
    },
  },
  {
    path: '/redeem',
    name: 'Redeem',
    component: () => import('../views/Redeem.vue'),
    meta: {
      hasNavBar: true,
    },
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import('../views/Payment.vue'),
    meta: {
      hasNavBar: true,
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
