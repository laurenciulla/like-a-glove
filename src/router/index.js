import Vue from 'vue'
import VueMaterial from 'vue-material'
import vClickOutside from 'v-click-outside'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)
Vue.use(vClickOutside)

import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import * as firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/details',
    name: 'details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Details.vue'),
    meta: {
        requiresAuth: true
    }
  },
    {
    path: '/edit-measurements',
    name: 'edit-measurements',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Edit-Measurements.vue'),
    meta: {
        requiresAuth: true
    }
  },
    {
    path: '/edit-details',
    name: 'edit-details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Edit-Details.vue'),
    meta: {
        requiresAuth: true
    }
  },
    {
    path: '/new-item',
    name: 'new-item',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/New-Item.vue'),
    meta: {
        requiresAuth: true
    }
  },
    {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta: {
        requiresGuest: true
    }
  }
  ,
    {
    path: '/create-account',
    name: 'create-account',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Create-Account.vue'),
    meta: {
        requiresGuest: true
    }
  }
]

let router = new VueRouter({
  routes
})

export default router

// nav guards
router.beforeEach((to, from, next) => {
    // check for requiredAuth guard
    if (to.matched.some(record => record.meta.requiresAuth)) {
        //check if NOT logged in
        if(!firebase.auth().currentUser){
            //go to login page
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            //Proceed to route
            next();
        }
    } else if(to.matched.some(record => record.meta.requiresGuest)) {
        //check if IS logged in
        if(firebase.auth().currentUser){
            //go to login page
            next({
                path: '/',
                query: {
                    redirect: to.fullPath
                }
            });
        } else {
            //Proceed to route
            next();
        }
    } else {
        //Proceed to route
        next();
    }
})



