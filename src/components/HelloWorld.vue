<script setup lang="ts">
import ThemePicker from './ThemePicker.vue'
import type { Theme } from '~/types'

const count = ref(0)
const add = () => {
  count.value++
}
const theme1 = ref<Theme[]>([
  {
    variableName: '--el-color-primary',
    color: '#e91e63',
  },
])
const theme2 = ref<Theme[]>([
  {
    variableName: '--el-color-primary',
    color: '#2196f3',
  },
])
</script>

<template>
  <h1>mine-template</h1>
  <h1 @click="add()">
    {{ count }}
  </h1>
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
  <h2 mt-10>
    两种切换图标的写法
  </h2>
  <div mt-10 flex="~" justify-center @click="toggleDark()">
    <div v-if="isDark" i-carbon-moon text-gray-500 />
    <div v-else i-carbon-sun text-gray-500 />
  </div>
  <div mt-10 flex="~" justify-center>
    <el-button type="primary" @click="changeThemes(theme1)">
      颜色1
    </el-button>
    <el-button type="primary" @click="changeThemes(theme2)">
      颜色2
    </el-button>
  </div>
  <div>
    <ThemePicker />
  </div>
</template>

<style scoped>
</style>
