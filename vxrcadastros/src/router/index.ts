import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClienteView from '../views/ClienteView.vue'
import FornecedorView from '../views/FornecedorView.vue'
import UsuarioView from '../views/UsuarioView.vue'
import store from '../store'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cliente',
    name: 'cliente',
    component: ClienteView
  },
  {
    path: '/fornecedor',
    name: 'fornecedor',
    component: FornecedorView
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: UsuarioView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  //console.log(to)

  if (to.name === 'usuario' && !store.state.LoginModule.logado) {
    next()
    
  } else if (store.state.LoginModule.logado) {
    next()
  } else{
    alert("Usuário Desconectado! Faça Login")
  }
})
export default router
