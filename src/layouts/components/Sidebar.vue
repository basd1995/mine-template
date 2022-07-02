<script setup lang="ts">
import SubMenuItem from './menu/SubMenuItem.vue'
// import { getUserInfo } from '~/apis/userManagement'

const setting = designSettings()
const menu = ref<any>([])

/**
 * 数组转树形结构
 * @param list 源数组
 * @param tree 树
 * @param parentId 父ID
 */
const listToTree = (list: any, tree: any, parentId: any) => {
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

// const init = async () => {
//   const res = await getUserInfo()
//   const resNav = res.data.menus
//   const childrenNav: any = []
//   //      后端数据, 根级树数组,  根级 PID
//   listToTree(resNav, childrenNav, '0')
//   menu.value = childrenNav
//   console.warn('childrenNav', childrenNav)
// }
onMounted(() => {
  // init()
})
</script>

<template>
  <el-menu class="menu-vertical" :collapse="setting.getIsCollapse">
    <SubMenuItem v-for="item of menu" :key="item.id" :menu-item="item" />
  </el-menu>
</template>

<style lang="scss" scoped>
.menu-vertical {
  border-right: 0;

  &:not(.el-menu--collapse) {
    width: 200px;
  }
}
</style>
