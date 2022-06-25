<script setup lang="ts">
import rgbHex from 'rgb-hex'
import cssColor from 'css-color-function'

const primary = 'rgba(64, 158, 255, 1)'
// const primary = 'rgba(102,177,255,1)'
const colorTint = ref<any>([])
const colorShade = ref<any>([])
const result = () => {
  for (let i = 0; i < 100; i++) {
    colorTint.value.push({
      type: 'tint',
      percent: `${i}%`,
      color: `#${rgbHex(cssColor.convert(`color(${primary} tint(${i}%))`))}`,
      rgb: `${cssColor.convert(`color(${primary} tint(${i}%))`)}`,
    })
    colorShade.value.push({
      type: 'shade',
      percent: `${i}%`,
      color: `#${rgbHex(cssColor.convert(`color(${primary} shade(${i}%))`))}`,
      rgb: `${cssColor.convert(`color(${primary} shade(${i}%))`)}`,
    })
  }
}
result()
</script>

<template>
  <div mt-10>
    <p>tint/shade生成色阶，这里面有100个阶，每个阶的色值都是相同的，只是颜色深度不同</p>
    <p>element默认主题色从这里面取的，dark的主题色就不知道了，单独设计的？</p>
  </div>
  <div flex="~" justify-around overflow-scroll h-100 border border-gray-400>
    <div>
      <div v-for="item, index of colorTint" :key="index" text-left flex="~" items-center my-2>
        <span w-20 h-6 mr-10>{{ item.type }}</span>
        <span w-20 h-6 mr-10>{{ item.percent }}</span>
        <span w-20 h-6 mr-10>{{ item.color }}</span>
        <span w-50 h-6>{{ item.rgb }}</span>
        <span inline-block w-6 h-6 :style="{ background: `${item.rgb}` }" />
      </div>
    </div>
    <div>
      <div v-for="item, index of colorShade" :key="index" text-left flex="~" items-center my-2>
        <span w-20 h-6 mr-10>{{ item.type }}</span>
        <span w-20 h-6 mr-10>{{ item.percent }}</span>
        <span w-20 h-6 mr-10>{{ item.color }}</span>
        <span w-50 h-6>{{ item.rgb }}</span>
        <span inline-block w-6 h-6 :style="{ background: `${item.rgb}` }" />
      </div>
    </div>
  </div>
</template>

