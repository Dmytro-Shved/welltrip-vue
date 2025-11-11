import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/components/DefaultLayout.vue'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'
import NotFound from '@/pages/NotFound.vue'
import Travels from '@/pages/Travels.vue'
import Tours from '@/pages/Tours.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {path: '/', name: 'Home', component: Home},
      {path: '/travels', name: 'Travels', component: Travels},
      {path: '/tours', name: 'Tours', component: Tours},
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
