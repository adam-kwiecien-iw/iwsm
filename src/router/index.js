import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import List from '@/components/board/List'; //게시판 리스트 컴포넌트 호출
import Employees from '@/views/resource/Employees'; //게시판 리스트 컴포넌트 호출
import Skills from '@/views/resource/Skills'; //게시판 리스트 컴포넌트 호출

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( '../views/Register.vue')
  },{
    path:'/board/list'
    ,name:List
    ,component:List
  },{
    path:'/employees'
    ,name:Employees
    ,component:Employees
  }
  ,{
    path:'/skills'
    ,name:Skills
    ,component:Skills
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
