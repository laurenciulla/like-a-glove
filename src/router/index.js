import Vue from 'vue'
import VueMaterial from 'vue-material'
import vClickOutside from 'v-click-outside'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)
Vue.use(vClickOutside)

import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/details',
    name: 'details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Details.vue')
  },
    {
    path: '/edit-measurements',
    name: 'edit-measurements',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Edit-Measurements.vue')
  },
    {
    path: '/edit-details',
    name: 'edit-details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Edit-Details.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
