/*
 * @Author: basd1995
 * @Date: 2022-06-24 13:31:04
 * @LastEditors: basd1995
 * @LastEditTime: 2022-06-26 23:10:42
 */
import cssColor from 'css-color-function'
import lightCssVar from 'element-plus/dist/index.css'
import darkCssVar from 'element-plus/theme-chalk/dark/css-vars.css'
import rgbHex from 'rgb-hex'
import { darkColorMap, darkFormula, lightColorMap, lightFormula } from '~/styles/themes/constants'
import type { JsonObject } from '~/types'

// const el = document.documentElement

// export const changeThemes = (themes: Theme[]) => {
//   themes.forEach((theme) => {
//     getComputedStyle(el).getPropertyValue('theme.variableName') // ???
//     el.style.setProperty(theme.variableName, theme.color)
//   })
// }

/**
 * 根据主色生成自定义的色值表
 * @param primaryColor 主色
 */
const generateColors = (primaryColor: string, formula: JsonObject) => {
  if (!primaryColor)
    return
  const colors: JsonObject = {
    primary: primaryColor,
  }
  Object.keys(formula).forEach((key) => {
    const value = formula[key].replace(/primary/g, primaryColor)
    colors[key] = `#${rgbHex(cssColor.convert(value))}`
  })
  return colors
}

/**
 * 把element-plus原始主题色值转换成code替代，如下样子
 * --el-color-primary: primary;
  --el-color-primary-light-3: light-3;
  --el-color-primary-light-5: light-5;
  --el-color-primary-light-7: light-7;
  --el-color-primary-light-8: light-8;
  --el-color-primary-light-9: light-9;
  --el-color-primary-dark-2: dark-2;
  * 返回替代后的element-plus样式表
 */
const getOriginalStyle = (colorMap: JsonObject, cssVar: string) => {
  // 根据默认色值为要替换的色值打上标记
  Object.keys(colorMap).forEach((key) => {
    const value = colorMap[key]
    cssVar = cssVar.replace(new RegExp(key, 'ig'), value)
  })
  return cssVar
}

/**
 * 写入新样式插入到页面的style标签中
 * @param elNewStyle  element-plus 的新样式
 */
const writeNewStyle = (elNewStyle: string, id: string) => {
  const oldStyle = document.getElementById(id)
  if (oldStyle) {
    oldStyle.innerHTML = elNewStyle
    return
  }

  const style = document.createElement('style')
  style.id = id
  style.innerText = elNewStyle
  document.head.appendChild(style)
}

/**
 * 根据主色值，生成最新的样式表
 */
export const generateNewStyle = (primaryColor: string) => {
  const lightColors = generateColors(primaryColor, lightFormula)
  const darkColors = generateColors(primaryColor, darkFormula)

  let lightStyle = getOriginalStyle(lightColorMap, lightCssVar)
  let darkStyle = getOriginalStyle(darkColorMap, darkCssVar)

  // 遍历生成的样式表，在 CSS 的原样式中进行全局替换
  Object.keys(lightColors as JsonObject).forEach((key) => {
    lightStyle = lightStyle.replace(
      //  不管key前面是什么，都替换成色值
      new RegExp(`(:|\\s+)${key}`, 'g'),
      `$1${(lightColors as JsonObject)[key]}`,
    )
  })
  Object.keys(darkColors as JsonObject).forEach((key) => {
    darkStyle = darkStyle.replace(
      //  不管key前面是什么，都替换成色值
      new RegExp(`(:|\\s+)${key}`, 'g'),
      `$1${(darkColors as JsonObject)[key]}`,
    )
  })
  writeNewStyle(lightStyle, 'light')
  writeNewStyle(darkStyle, 'dark')
}

