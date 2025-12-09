import { createRouter, createWebHistory, START_LOCATION } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ToursView from '@/views/ToursView.vue'
import DashboardView from '@/views/DashboardView.vue'
import { useUserStore } from '@/store/user.js'

const routes = [
  {
    name: 'Login',
    path: '/login',
    component: LoginView,
    meta: { auth: false },
  },
  {
    name: 'Register',
    path: '/register',
    component: RegisterView,
    meta: { auth: false },
  },
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        name: 'Dashboard',
        path: '/',
        component: DashboardView,
        meta: { auth: false },
      },
      {
        name: 'Tours',
        path: '/tours',
        component: ToursView,
        meta: { auth: true },
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
    meta: { auth: false },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();

  if (from === START_LOCATION) {
    await userStore.getUser();
  }

  if ((to.name === 'Login' || to.name === 'Register') && userStore.isAuthorized) {
    return next('/')
  }

  if (to.meta.auth && !userStore.isAuthorized) {
    return next('/login')
  }
  next()
})

export async function routerPush(name, params) {
  if (params === undefined) {
    return await router.push({ name })
  } else {
    return await router.push({ name, params })
  }
}
export default router
