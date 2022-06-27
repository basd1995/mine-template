<!--
 * @Author: basd1995
 * @Date: 2022-06-25 20:00:08
 * @LastEditors: basd1995
 * @LastEditTime: 2022-06-27 18:18:56
-->
<script setup lang="ts">
import cssColor from 'css-color-function'
import rgbHex from 'rgb-hex'
const elementDarkAi = ref([
  [51, 117, 185],
  [42, 89, 138],
  [33, 66, 99],
  [24, 43, 74],
  [15, 22, 44],

])
const elementDark = ref([
  [51, 117, 185],
  [42, 89, 138],
  [33, 61, 91],
  [29, 48, 67],
  [24, 34, 44],
])
const rule = ref('color(#409eff blend(#141414 50%))')
const rgb = ref('')
const result = ref('')
const hex = () => {
  // rgb.value = cssColor.convert(`${rule.value}`)
  rgb.value = cssColor.convert(`${rule.value}`)
  result.value = `#${rgbHex(rgb.value)}`
}
hex()
</script>

<template>
  <div mt-10>
    element dark css
  </div>
  <div flex="~" justify-around>
    <div>
      <div>element dark主题色</div>
      <div v-for="item, index of elementDark" :key="index" flex="~" items-center>
        <span inline-block w-10 h-10 :style="{ background: `rgb(${item[0]}, ${item[1]}, ${item[2]})` }" />
        <span>{{ `rgb(${item[0]}, ${item[1]}, ${item[2]})` }}</span>
      </div>
    </div>
    <div>
      <div>element dark主题色差</div>
      <div v-for="item, index of elementDark" :key="index" flex="~" items-center>
        <span inline-block h-10>
          {{ `${item[0] - elementDark[index === 0 ? 0 : index - 1][0]}, ${item[1] - elementDark[index === 0 ? 0 : index - 1][1]}, ${item[2] - elementDark[index === 0 ? 0 : index - 1][2]}` }}
        </span>
      </div>
    </div>
    <div>
      <div>Copilot AI 等差生成</div>
      <div v-for="item, index of elementDarkAi" :key="index" flex="~" items-center>
        <span inline-block w-10 h-10 :style="{ background: `rgb(${item[0]}, ${item[1]}, ${item[2]})` }" />
        <span>{{ `rgb(${item[0]}, ${item[1]}, ${item[2]})` }}</span>
      </div>
    </div>
  </div>
  <div>
    <div>测试css-color-function</div>
    <el-input v-model="rule" placeholder="请输入规则" @change="hex()" />
    <div text-center>
      <span inline-block w-10 h-10 :style="{ background: `${result}` }" />
      <div>
        {{ result }}
        {{ rgb }}
      </div>
    </div>
  </div>
  <div>暂时没有头绪，源码里面的scss文件没太看懂，先取日间模式下最近似的shade混入吧</div>
  <div>第二天又看了看源码dark文件的set-color-mix-level的，是混入的bg-color：#141414，不是shade中的black</div>
  <div>看上面input的规则就行</div>

  <div>测试github同步</div>
</template>

