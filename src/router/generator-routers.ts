import type { routerItem } from '~/types'
// import BasicLayout from '~/layouts/BasicLayout.vue'

// 前端路由表
// const constantRouterComponents = {
//   // 基础页面 layout 必须引入
//   BasicLayout,
// }

// 根级菜单
const rootRouter: routerItem = {
  key: '',
  name: 'MenuIndex.vue',
  path: '',
  component: 'BasicLayout',
  redirect: '/welcome',
  meta: {
    title: '首页',
  },
  children: [],
}

/**
 * 数组转树形结构
 * @param list 源数组
 * @param tree 树
 * @param parentId 父ID
 */
const listToTree = (list: routerItem[], tree: routerItem[], parentId: string) => {
  list.forEach((item: any) => {
    // 判断是否为父级菜单
    if (item.pid === parentId) {
      const child = {
        ...item,
        key: item.key || item.name,
        children: [],
      }
      // 迭代 list， 找到当前菜单相符合的所有子菜单
      listToTree(list, child.children, item.id)
      // 删掉不存在 children 值的属性
      if (child.children.length <= 0)
        delete child.children
        // 加入到树中
      tree.push(child)
    }
  })
}

/**
 * 格式化树形结构数据 生成 vue-router 层级路由表
 *
 * @param routerMap
 * @param parent
 * @returns {*}
 */
export const generator = (routerMap: routerItem[], parent?: routerItem) => {
  return routerMap.map((item) => {
    const { title, show, hideChildren, target, icon, link } = item.meta || {}
    const currentRouter: routerItem = {
      id: item.id,
      // 如果路由设置了 path，则作为默认 path，否则 路由地址 动态拼接生成如 /dashboard/workplace
      // eslint-disable-next-line no-mixed-operators
      path: item.path || `${parent && parent.path || ''}/${item.key}`,
      // 路由名称，建议唯一
      name: item.name || item.key || '',
      // 该路由对应页面的 组件动态加载
      component: () => import(/* @vite-ignore */`~/pages/${item.component}`),
      // meta: 页面标题, 菜单图标, 页面权限(供指令权限用，可去掉)
      meta: {
        title,
        icon: icon || undefined,
        // hiddenHeaderContent: hiddenHeaderContent,
        target,
        link,
      },
    }
    // 是否设置了隐藏菜单
    if (show === false)
      currentRouter.hidden = true

    // 是否设置了隐藏子菜单
    if (hideChildren)
      currentRouter.hideChildrenInMenu = true

    // 为了防止出现后端返回结果不规范，处理有可能出现拼接出两个 反斜杠
    if (!currentRouter.path.startsWith('http'))
      currentRouter.path = currentRouter.path.replace('//', '/')

    // 重定向
    item.redirect && (currentRouter.redirect = item.redirect)
    // 是否有子菜单，并递归处理
    if (item.children && item.children.length > 0) {
      // Recursion
      currentRouter.children = generator(item.children, currentRouter)
    }
    return currentRouter
  })
}

/**
 * 动态生成菜单
 * @param data
 * @returns {Promise<Router>}
 */
export const generatorDynamicRouter = (data: routerItem[]) => {
  const routerList: routerItem[] = []
  listToTree(data, routerList, '0')
  rootRouter.children?.push(...routerList)
  const _asyncRouter = asyncRouter()
  _asyncRouter.updateRouters(generator([rootRouter]))
}
