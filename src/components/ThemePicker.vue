<script lang="ts" setup>
const color = ref('rgba(255, 69, 0, 0.68)')
const predefineColors = ref([
  '#409eff',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])

const changeThemeColor = (color: string) => {
  const { lightStyle, darkStyle } = generateNewStyle(color)
  writeNewStyle(lightStyle, 'light')
  writeNewStyle(darkStyle, 'dark')
}
</script>

<template>
  <el-color-picker
    v-model="color"
    show-alpha
    :predefine="predefineColors"
    @change="changeThemeColor"
  />
</template>
