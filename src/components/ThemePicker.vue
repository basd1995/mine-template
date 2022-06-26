<!--
 * @Author: basd1995
 * @Date: 2022-06-25 18:08:02
 * @LastEditors: basd1995
 * @LastEditTime: 2022-06-26 23:05:13
-->
<script lang="ts" setup>
const setting = designSettings()
// 获取主题色
const color = ref(setting.getPrimaryColor || '#409eff')
const predefineColors = ref([
  '#409eff',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
])
const changeThemeColor = (color: string) => {
  // 更新主题色
  setting.updatePrimaryColor(color)
}
</script>

<template>
  <el-color-picker
    v-model="color"
    color-format="hex"
    :predefine="predefineColors"
    @change="changeThemeColor"
  />
</template>
