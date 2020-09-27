import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/airport/add',
    name: 'AddAirportView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "FormAirport" */ '../views/AddAirportView.vue')
  },
  {
    path: '/airport/update/:id',
    name: 'UpdateAirportView',
    component: () => import(/* webpackChunkName: "FormAirport" */ '../views/AddAirportView.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
