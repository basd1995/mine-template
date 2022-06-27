/*
 * @Author: basd1995
 * @Date: 2022-06-26 00:54:11
 * @LastEditors: basd1995
 * @LastEditTime: 2022-06-27 15:17:48
 */

import type { JsonObject } from '~/types'

// 主色表生成公式给cssColor.convert用
export const lightFormula: JsonObject = {
  'light-3': 'color(primary tint(30%))',
  'light-5': 'color(primary tint(50%))',
  'light-7': 'color(primary tint(70%))',
  'light-8': 'color(primary tint(80%))',
  'light-9': 'color(primary tint(90%))',
  'dark-2': 'color(primary shade(20%))',
}

// 暗黑主色表生成公式给cssColor.convert用
// element use $bg-color to mixin primary
export const darkFormula: JsonObject = {
  'light-3': 'color(#141414 blend(primary 70%))',
  'light-5': 'color(#141414 blend(primary 50%))',
  'light-7': 'color(#141414 blend(primary 30%))',
  'light-8': 'color(#141414 blend(primary 20%))',
  'light-9': 'color(#141414 blend(primary 10%))',
  'dark-2': 'color(primary tint(20%))',
}

// element-plus 默认色值
export const lightColorMap: JsonObject = {
  '#409eff': 'primary',
  '#79bbff': 'light-3',
  '#a0cfff': 'light-5',
  '#c6e2ff': 'light-7',
  '#d9ecff': 'light-8',
  '#ecf5ff': 'light-9',
  '#337ecc': 'dark-2',
}
// element-plus dark 默认色值
export const darkColorMap: JsonObject = {
  '#409eff': 'primary',
  '#3375b9': 'light-3',
  '#2a598a': 'light-5',
  '#213d5b': 'light-7',
  '#1d3043': 'light-8',
  '#18222c': 'light-9',
  '#66b1ff': 'dark-2',
}

export const MINE_COLOR = 'main-color'
export const DEFAULT_COLOR = '#409eff'
