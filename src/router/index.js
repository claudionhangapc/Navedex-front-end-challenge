import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AddNaver from '../views/AddNaver.vue'
import EditNaver from '../views/EditNaver.vue'
import ModalShowNaver from '../views/ModalShowNaver.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:"show/:id",
        name:"modalshownaver",
        component:ModalShowNaver,
        props:true
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/adicionar',
    name: 'Adicionar',
    component: AddNaver
  },
  {
    path: '/editar',
    name: 'Editar',
    component: EditNaver
  }
]

const router = new VueRouter({
  mode: 'history',
  base: "navers",
  routes
})
//process.env.BASE_URL
export default router
