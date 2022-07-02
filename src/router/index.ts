/*
 * @Author: basd1995
 * @Date: 2022-06-27 22:54:47
 * @LastEditors: basd1995
 * @LastEditTime: 2022-07-02 22:18:45
 */
import type { Router } from 'vue-router'
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
        name: 'workplace',
        component: () => import('~/page/Home.vue'),
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('~/page/User.vue'),
      },
      {
        path: '/hello-world',
        name: 'hello-world',
        component: () => import('~/components/HelloWorld.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('~/page/login/Login.vue'),
  },
]

const router: Router = createRouter({
  history:
    process.env.NODE_ENV === 'production'
      ? createWebHistory()
      : createWebHashHistory(),
  routes: publicRoutes,
})

export default router
