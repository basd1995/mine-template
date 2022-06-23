<script setup lang="ts">
const count = ref(0)
</script>

<template>
  <h1>mine-template</h1>
  <h1>{{ count }}</h1>
  <div>
    <el-button>Default</el-button>
    <el-button type="primary">
      Primary
    </el-button>
    <el-button type="success">
      Success
    </el-button>
    <el-button type="info">
      Info
    </el-button>
    <el-button type="warning">
      Warning
    </el-button>
    <el-button type="danger">
      Danger
    </el-button>
  </div>
  <div mt-10 flex="~" justify-center @click="toggleDark()">
    <div text-gray-500 i="carbon-sun dark:carbon-moon" />
  </div>
</template>

<style scoped>
</style>
