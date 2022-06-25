import cssColor from 'css-color-function'
import themeVariable from 'element-plus/dist/index.css'
import rgbHex from 'rgb-hex'
import type { JsonObject } from '~/types'

// 主色表生成公式给cssColor.convert用
const formula: JsonObject = {
  'light-3': 'color(primary tint(30%))',
  'light-5': 'color(primary tint(50%))',
  'light-7': 'color(primary tint(70%))',
  'light-8': 'color(primary tint(80%))',
  'light-9': 'color(primary tint(90%))',
  'dark-2': 'color(primary shade(20%))',
}

// element-plus 默认色值
const colorMap: JsonObject = {
  '#409eff': 'primary',
  '#79bbff': 'light-3',
  '#a0cfff': 'light-5',
  '#c6e2ff': 'light-7',
  '#d9ecff': 'light-8',
  '#ecf5ff': 'light-9',
  '#337ecc': 'dark-2',
}

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
const generateColors = (primaryColor: string) => {
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
const getOriginalStyle = () => {
  let style = themeVariable
  // 根据默认色值为要替换的色值打上标记
  Object.keys(colorMap).forEach((key) => {
    const value = colorMap[key]
    style = style.replace(new RegExp(key, 'ig'), value)
  })
  return style
}

/**
 * 根据主色值，生成最新的样式表
 */
export const generateNewStyle = (primaryColor: string) => {
  const colors = generateColors(primaryColor)
  let cssStyleText = getOriginalStyle()

  // 遍历生成的样式表，在 CSS 的原样式中进行全局替换
  Object.keys(colors as JsonObject).forEach((key) => {
    cssStyleText = cssStyleText.replace(
      //  不管key前面是什么，都替换成色值
      new RegExp(`(:|\\s+)${key}`, 'g'),
      `$1${(colors as JsonObject)[key]}`,
    )
  })
  return cssStyleText
}

/**
 * 写入新样式插入到页面的style标签中
 * @param elNewStyle  element-plus 的新样式
 */
export const writeNewStyle = (elNewStyle: string) => {
  const style = document.createElement('style')
  style.innerText = elNewStyle
  document.head.appendChild(style)
}

