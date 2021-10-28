import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import AddForm from "../views/Product/AddForm";
import EditForm from "../views/Product/EditForm";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/add',
    name: 'AddForm',
    component: AddForm
  },
  {
    path: '/edit/:id',
    name: 'EditForm',
    component: EditForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
