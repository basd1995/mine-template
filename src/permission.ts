import NProgress from 'nprogress' // progress bar
import type { Applocation } from './types'
import router from './router'

NProgress.configure({ showSpinner: false })
const whiteList = ['login', 'register', 'registerResult'] // no redirect whitelist
// 无默认首页的情况
const defaultRoutePath = '/hello-world'

router.beforeEach(async (to, from, next) => {
  const _userStore = userStore()
  NProgress.start() // start progress bar
  if (vls.get(ACCESS_TOKEN)) {
    /* has token */
    if (to.path === '/login') {
      next({ path: defaultRoutePath })
      NProgress.done()
    }
    else {
      if (_userStore.roles === '') {
        try {
          const res = await _userStore.getUserInfo()
          if (res.menus.length < 1) {
            ElMessageBox.confirm(
              '无菜单权限，请联系管理员',
              '提示：', {
                confirmButtonText: '确定',
                callback: async () => {
                  await _userStore.logout()
                  window.location.reload()
                },
              })
            console.warn(res)
            return
          }
          const all_app_menu = vls.get(ALL_APPS_MENU)
          if (all_app_menu === null) {
            const applocation: Applocation[] = []
            res.apps.forEach((item: Applocation) => {
              /**
               * @code: 应用编码
               * @name: 应用名称
               * @active: 是否激活
               * @menu: 应用菜单
               */
              const apps: Applocation = { code: '', name: '', active: false, menu: [] }
              if (item.active) {
                apps.code = item.code
                apps.name = item.name
                apps.active = item.active
                apps.menu = res.menus
              }
              else {
                apps.code = item.code
                apps.name = item.name
                apps.active = item.active
                apps.menu = []
              }
              applocation.push(apps)
            })
            vls.set(ALL_APPS_MENU, applocation, 7 * 24 * 60 * 60 * 1000)
          }
          // 请求带有 redirect 重定向时，登录自动重定向到该地址
          const redirect = decodeURIComponent(from.query.redirect as string || to.path)
          if (to.path === redirect) {
            next({ path: redirect })
            // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            // next({ ...to, replace: true })
          }
          else {
            // 跳转到目的路由
            next({ path: redirect })
          }
        }
        catch (e) {
          console.warn(e)
          _userStore.clearInfo()
          next({ path: '/login', query: { redirect: to.fullPath } })
        }
      }
      else { next() }
    }
  }
  else {
    console.warn(to.name)
    // next({ path: '/login', query: { redirect: to.fullPath } })
    if (whiteList.includes(to.name as string)) {
      // 在免登录白名单，直接进入
      next()
    }
    else {
      next({ path: '/login', query: { redirect: to.fullPath } })
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
