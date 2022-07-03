<script setup lang="ts">
const setting = designSettings()
const _userStore = userStore()
const changeCollapse = () => {
  setting.updateIsCollapse(!setting.getIsCollapse)
}
</script>

<template>
  <div flex="~" items-center w-full h-full>
    <el-icon :size="24" color="#ffffff" @click="changeCollapse">
      <div v-if="!setting.getIsCollapse" i-ep-fold />
      <div v-else i-ep-expand />
    </el-icon>
    <button btn @click="goPage('/workplace')">
      Workplace页面
    </button>
    <button btn @click="goPage('/user')">
      User页面
    </button>
    <button btn @click="goPage('/hello-world')">
      HelloWorld页面
    </button>
    <button btn @click="_userStore.logout">
      登出
    </button>
  </div>
</template>

<style lang="scss" scoped>
</style>
