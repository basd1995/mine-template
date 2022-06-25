// test custom theme
// import themeVariable from 'element-plus/dist/index.css'
import type { Theme } from '~/types'

const el = document.documentElement

export const changeThemes = (themes: Theme[]) => {
  themes.forEach((theme) => {
    getComputedStyle(el).getPropertyValue('theme.variableName') // ???
    el.style.setProperty(theme.variableName, theme.color)
  })
}

