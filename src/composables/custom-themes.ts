import cssColor from 'css-color-function'
// import { formula } from '~/utils/formula.json'
// test custom theme
import themeVariable from 'element-plus/dist/index.css'
import rgbHex from 'rgb-hex'
import type { ColorFormula, Theme } from '~/types'

const formula: ColorFormula = {
  'light-3': 'color(primary tint(30%))',
  'light-5': 'color(primary tint(50%))',
  'light-7': 'color(primary tint(70%))',
  'light-8': 'color(primary tint(80%))',
  'light-9': 'color(primary tint(90%))',
  'dark-2': 'color(primary shade(20%))',
}

const el = document.documentElement

export const changeThemes = (themes: Theme[]) => {
  themes.forEach((theme) => {
    getComputedStyle(el).getPropertyValue('theme.variableName') // ???
    el.style.setProperty(theme.variableName, theme.color)
  })
}

/**
 * 根据主色生成自定义的色值表
 * @param primaryColor 主色
 */
export const generateColors = (primaryColor: string) => {
  if (!primaryColor)
    return
  const colors: any = {}
  Object.keys(formula).forEach((key) => {
    const value = formula[key].replace(/primary/g, primaryColor)
    colors[key] = `#${rgbHex(cssColor.convert(value))}`
  })
  console.log('colors', colors)
}

