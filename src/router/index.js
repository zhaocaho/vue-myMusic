import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login/index.vue'
import Home from '@/components/Home/index.vue'
import Find from '@/components/Find/index.vue'
import Cloud from '@/components/Cloud/index.vue'
import Video from '@/components/Video/index.vue'
import Phone from '@/components/Login/Phone.vue'
import Register from '@/components/Login/Register.vue'
import Play from '@/components/Play/index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: Login },
  { path: '/login/cellphone', component: Phone, name: 'Phone' },
  { path: '/register/cellphone', component: Register, name: 'Register' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/find', name: 'Find', component: Find },
  { path: '/cloud', name: 'Cloud', component: Cloud },
  { path: '/video', name: 'Video', component: Video },
  { path: '/play', name: 'Play', component: Play }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'nav-active'
})

export default router
