import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Profile from '../views/Profile.vue'
// import Post from '../views/Post.vue'
import BaseLayout from "../components/homeworks/Unit05/BaseLayout";
import ProductPage from "../components/homeworks/Unit05/ProductPage";
import Invoice from "../components/homeworks/Unit05/Invoice";
import Statistic from "../components/homeworks/Unit05/Statistic";
import Product from "../components/homeworks/Unit05/Product";
import Order from "../components/homeworks/Unit05/Order";
import Customer from "../components/homeworks/Unit05/Customer";
import Revenue from "../components/homeworks/Unit05/Revenue";
import Inventory from "../components/homeworks/Unit05/Inventory";
import System from "../components/homeworks/Unit05/System";
import Login from "../components/homeworks/Unit05/Login";
import ListProduct from "../components/lesson-group/lesson3/ListProduct";
import ProductDetail from "../components/lesson-group/lesson3/ProductDetail";
import Todo from "../views/Todo";
import Exercise from "../views/Exercise";
import Cart from "../views/Cart";
import Drag from "../components/lesson-group/lesson4/Drag";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/drag',
    name: 'Drag',
    component: Drag
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  // {
  //   path: '/user/:id',
  //   name: 'User',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/User.vue'),
  //   children: [
  //     {
  //       path: 'profile',
  //       component: Profile
  //     },
  //     {
  //       path: 'post',
  //       component: Post
  //     },
  //   ]
  // },
  //Unit 05
  {
    path: '/login',
    name : 'Login',
    component: Login
  },
  {
    path : '/',
    name : 'BaseLayout',
    component: BaseLayout,
  },
  {
    path: '/product-management',
    name : 'ProductPage',
    component: ProductPage
  },
  {
    path: '/invoice-management',
    name : 'Invoice',
    component: Invoice
  },
  {
    path: '/statistic',
    name : 'Statistic',
    component: Statistic
  },
  {
    path: '/product',
    name : 'Product',
    component: Product
  },
  {
    path: '/order',
    name : 'Order',
    component: Order
  },
  {
    path: '/customer',
    name : 'Customer',
    component: Customer
  },
  {
    path: '/revenue',
    name : 'Revenue',
    component: Revenue
  },
  {
    path: '/inventory',
    name : 'Inventory',
    component: Inventory
  },
  {
    path: '/system-setting',
    name : 'System',
    component: System
  },
  {
    path: '/danh-sach-san-pham',
    name : 'ListProduct',
    component: ListProduct
  },
  {
    path: '/chi-tiet-san-pham',
    name : 'ProductDetail',
    component: ProductDetail
  },

    // Unit 07
  {
    path: '/homework-7-1',
    name : 'Cart',
    component: Cart
  },
  {
    path: '/homework-7-2',
    name : 'Exercise',
    component: Exercise
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
