<script setup lang="ts">
import type { routerItem } from '~/types'

const setting = designSettings()
const _asyncRouter = asyncRouter()
const menu = ref<routerItem[]>([])

onMounted(() => {
  const router: routerItem[] = _asyncRouter.getRouters
  menu.value = router[0].children as routerItem[]
})
</script>

<template>
  <el-menu class="menu-vertical" :collapse="setting.getIsCollapse">
    <SubMenuItem v-for="item of menu" :key="item.id" :menu-item="item" />
  </el-menu>
</template>
