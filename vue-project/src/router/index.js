import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ApartmentPage from '../pages/ApartmentPage.vue'
import ErrorPage from '../pages/ErrorPage.vue'
import LoginPage from '../pages/Login.vue'
import RegistrationPage from '../pages/Registration.vue'
import Bar from '../pages/Bar.vue'
import Foo from '../pages/Foo.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/apartments/:id',
      name: 'apartment',
      component: ApartmentPage
    },
    {
      path: '/login',
      name: 'login-page',
      component: LoginPage
    },
    {
      path: '/registration',
      name: 'registration-page',
      component: RegistrationPage
    },
    {
      path: '/foo',
      name: 'foo',
      component: Foo
    },
    {
      path: '/bar',
      name: 'bar',
      component: Bar
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error-page',
      component: ErrorPage
    }
  ]
})

export default router
