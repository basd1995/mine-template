<script setup lang="ts">
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
</template>

