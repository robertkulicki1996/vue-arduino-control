<template>
  <router-view>
  </router-view>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router/dist/vue-router';

import DashboardRoutes from 'features/dashboard/dashboard.routes';

import 'common/components'; 
import Jquery from 'jquery';

import BootstrapCSS from 'bootstrap/dist/css/bootstrap.css';
import Bootstrap from 'bootstrap';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect() {
      return '/dashboard';
    },
  },
  ...DashboardRoutes,
];

const router = new VueRouter({
  routes,
});

export default {
  router,
};
</script>

