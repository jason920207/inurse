import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/message'
import Message from '../views/index'
import Sos from '../views/sos'
import Square from '../views/square'
import Mine from '../views/mine'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/sos',
    name: 'Sos',
    component: Sos
  },
  {
    path: '/square',
    name: 'Square',
    component: Square
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
