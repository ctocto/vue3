import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue';

import mainPage from '../components/mainPage.vue';


const routes = [

  {

    path: '/',

    name: 'HelloWorld',

    component: HelloWorld

  },

  {

    path: '/mainPage',

    name: 'mainPage',

    component: mainPage

  }

]

const router = createRouter({

  history: createWebHashHistory(),

  routes

})

export default router