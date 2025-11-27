import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import LoginView from '@/views/auth/LoginView.vue';
import RegisterView from '@/views/auth/RegisterView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import ToursView from '@/views/ToursView.vue';
import DashboardView from '@/views/DashboardView.vue';
import { useAuthStore } from '@/store/authStore.js'

const routes = [
  // auth routes
  { path: '/login', name: 'Login', component: LoginView, meta: { requiresGuest: true } },
  { path: '/register', name: 'Register', component: RegisterView, meta: { requiresGuest: true } },

  // routes with DefaultLayout
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '/', name: 'Dashboard', component: DashboardView },
      { path: 'tours', name: 'Tours', component: ToursView },
    ]
  },

  // catch-all route for 404
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView, },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

// navigation guards
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    next('/login')
  } else if (to.meta.requiresGuest && authStore.isLoggedIn) {
      next('/')
  } else {
    next()
  }
})

export default router
