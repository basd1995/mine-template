<script setup lang="ts">
const setting = designSettings()
</script>

<template>
  <div h-60px bg-red-400>
    logo
  </div>
  <el-menu
    default-active="2"
    class="menu-vertical"
    :collapse="setting.getIsCollapse"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><div i-ep-message /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-sub-menu index="1-4">
        <template #title>
          <span>item four</span>
        </template>
        <el-menu-item index="1-4-1">
          item one
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><div i-ep-menu /></el-icon>
      <template #title>
        Navigator Two
      </template>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><div i-ep-document /></el-icon>
      <template #title>
        Navigator Three
      </template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><div i-ep-setting /></el-icon>
      <template #title>
        Navigator Four
      </template>
    </el-menu-item>
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
