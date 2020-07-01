import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login/index.vue'
import Home from '@/components/Home/index.vue'
import Find from '@/components/Find/index.vue'
import Cloud from '@/components/Cloud/index.vue'
import Video from '@/components/Video/index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: Login },
  { path: '/home', name: 'Home', component: Home },
  { path: '/find', name: 'Find', component: Find },
  { path: '/cloud', name: 'Cloud', component: Cloud },
  { path: '/video', name: 'Video', component: Video }
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
