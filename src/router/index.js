import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AddNaver from '../views/AddNaver.vue'
import EditNaver from '../views/EditNaver.vue'
import ModalShowNaver from '../views/ModalShowNaver.vue'
import ModalDeleteNaver from '../views/ModalDeleteNaver.vue'
import ModalCreatNaver from '../views/ModalCreatNaver.vue'
import ModalUpDateNaver from '../views/ModalUpDateNaver.vue'



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
      },
      {
        path:"deletar/:id",
        name:"modaldeletenaver",
        component:ModalDeleteNaver,
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
    name: 'adicionar',
    component: AddNaver,
    children:[
      {
        path:"confirm",
        name:"modalcreatnaver",
        component:ModalCreatNaver,
      }
    ]
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: EditNaver,
    props:true,
    children:[
      {
        path:"confirm",
        name:"modalupdatenaver",
        component:ModalUpDateNaver
      }
    ]
  },
  {
    path:"*",
    redirect:"/",
    component:Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: "navers",
  routes
})
//process.env.BASE_URL
export default router
