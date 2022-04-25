import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import RugbySkills from '../views/RugbySkills.vue';
import BasicSkills from '../views/BasicSkills.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/basic-skills',
    name: BasicSkills,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BasicSkills.vue'),
  },
  {
    path: '/rugby-skills',
    name: RugbySkills,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RugbySkills.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
