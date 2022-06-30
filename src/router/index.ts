/*
 * @Author: basd1995
 * @Date: 2022-06-27 22:54:47
 * @LastEditors: basd1995
 * @LastEditTime: 2022-06-30 21:55:21
 */
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'
import BasicLayout from '~/layouts/BasicLayout.vue'

/**
 * 公开路由表
 */
export const publicRoutes = [
  {
    path: '/',
    component: BasicLayout,
    redirect: '/workplace',
    children: [
      {
        path: '/workplace',
        component: () => import('~/page/Home.vue'),
      },
      {
        path: '/user',
        component: () => import('~/page/User.vue'),
      },
      {
        path: '/hello-world',
        component: () => import('~/components/HelloWorld.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('~/page/login/Login.vue'),
  },
]

const router = createRouter({
  history:
    process.env.NODE_ENV === 'production'
      ? createWebHistory()
      : createWebHashHistory(),
  routes: publicRoutes,
})

export default router
