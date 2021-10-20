import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BlogDetails from '../views/BlogDetails.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import MyBlogs from '../views/MyBlogs.vue'
import AddBlog from '../views/AddBlog.vue'
import EditBlog from '../views/EditBlog.vue'
import store from '../store'

// import {  }
// import NavBar from '../components/NavBar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blogDetails/:blogId?',
    name: 'BlogDetails',
    component: BlogDetails
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
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { private: true }
  },
  {
    path: '/myBlogs',
    name: 'MyBlogs',
    component: MyBlogs,
    meta: { private: true }
  },
  {
    path: '/addBlog',
    name: 'AddBlog',
    component: AddBlog,
    meta: { private: true }
  },
  {
    path: '/editBlog/:blogId?',
    name: 'EditBlog',
    component: EditBlog,
    meta: { private: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(function (to, from, next) {
  store.dispatch('login')
  // console.log('data', store.getters.isLoggedIn)

  if (to.meta.private !== true || (to.meta.private === true && store.getters.isLoggedIn)) {
    console.log(store.getters.isLoggedIn)
    console.log('store getters isLogin')
    next()
    // console.log('checknxt')
    return
  }
  // console.log(to.meta.private)
  next('/login')
})

export default router
