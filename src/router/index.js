import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Todo from "../views/Todo";
import BaseLayout from "../components/homeworks/Unit09/BaseLayout";
import ProductPage from "../components/homeworks/Unit09/ProductPage";
// import Drag from "../components/lesson-group/lesson4/Drag";
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/drag',
  //   name: 'Drag',
  //   component: Drag
  // },
  // {
  //   path: '/todo',
  //   name: 'Todo',
  //   component: Todo
  // },

  {
    path : '/',
    name : 'BaseLayout',
    component: BaseLayout,
    children: [

    ]
  },
  {
    path: '/products',
    name : 'ProductPage',
    component: ProductPage
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
