<script setup lang="ts">
const props = defineProps<{
  menuItem?: any
}>()
</script>

<template>
  <el-menu-item :index="props.menuItem.id">
    <template #title>
      <el-icon :size="14">
        <div i-ep-sunny />
      </el-icon>
      <span>{{ props.menuItem.meta.title }}</span>
    </template>
  </el-menu-item>
</template>
