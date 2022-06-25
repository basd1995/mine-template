<script setup lang="ts">
const count = ref(0)
const add = () => {
  count.value++
}
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
  <p mt-10>
    两种切换图标的写法
  </p>
  <div mt-5 flex="~" justify-center @click="toggleDark()">
    <div v-if="isDark" i-carbon-moon text-gray-500 />
    <div v-else i-carbon-sun text-gray-500 />
    <div i="carbon-sun dark:carbon-moon" text-gray-500 />
  </div>
  <p mt-10>
    动态切换默认主题色，后续补一下本地缓存
  </p>
  <div mt-5>
    <ThemePicker />
  </div>
  <div>
    <LightColorTest />
  </div>
  <p mt-10>
    暗黑主题色研究，生成的规则好像不是规律的？和默认不一样。
  </p>
  <div>
    <DarkColorTest />
  </div>
</template>

<style scoped>
</style>
