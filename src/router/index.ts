import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:path',
      name: 'home',
      meta: { layout: 'default' },
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',

      component: () => import('@/pages/login/Login.vue')
    },
    {
      path: '/employee-list',
      name: 'employee-list',
      meta: { layout: 'default' },
      component: () => import('@/pages/employee-list/EmployeeList.vue')
    },
    {
      path: '/add-employee',
      name: 'add-employee',
      meta: { layout: 'default' },
      component: () => import('@/pages/add-employee/AddEmployee.vue')
    },
    {
      path: '/employee-view',
      name: 'employee-view',
      meta: { layout: 'default' },
      component: () => import('@/pages/employee-view/EmployeeView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('token')

  if (to.name !== 'login' && !loggedIn) {
    return next('/login')
  }

  if (to.name === 'login' && loggedIn) {
    console.log('logged in')
    return next({ name: 'employee-list' })
  }

  return next()
})


export default router
