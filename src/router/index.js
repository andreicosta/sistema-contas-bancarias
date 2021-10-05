import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import('../views/Details.vue'),
  },
  {
    path: '/deposit',
    name: 'Deposit',
    component: () => import('../views/Deposit.vue'),
  },
  {
    path: '/redeem',
    name: 'Redeem',
    component: () => import('../views/Redeem.vue'),
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import('../views/Payment.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
