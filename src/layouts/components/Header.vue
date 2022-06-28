<script setup lang="ts">
const setting = designSettings()
const changeCollapse = () => {
  setting.updateIsCollapse(!setting.getIsCollapse)
}
</script>

<template>
  <div flex="~" items-center w-full h-full>
    <el-icon :size="24" color="#ffffff" @click="changeCollapse">
      <div i-ep-fold />
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
  </div>
</template>

<style lang="scss" scoped>
</style>
