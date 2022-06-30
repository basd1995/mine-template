<script setup lang="ts">
import MenuItem from './MenuItem.vue'
const props = defineProps<{
  menuItem?: any
}>()
</script>

<template>
  <MenuItem v-if="!props.menuItem.children" :menu-item="props.menuItem" />
  <el-sub-menu v-if="props.menuItem.children" :key="props.menuItem.id" :index="props.menuItem.id">
    <template #title>
      <el-icon :size="14">
        <!-- <div :class="`i-ep-${props.menuItem.meta.icon}`" /> -->
        <div class="i-ep-home-filled" />
      </el-icon>
      <span>{{ props.menuItem.meta.title }}</span>
    </template>
    <SubMenuItem
      v-for="subItem of props.menuItem.children"
      :key="subItem.id"
      :menu-item="subItem"
    />
  </el-sub-menu>
</template>
