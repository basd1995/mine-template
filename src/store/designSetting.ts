/*
 * @Author: basd1995
 * @Date: 2022-06-26 15:45:07
 * @LastEditors: basd1995
 * @LastEditTime: 2022-06-26 23:23:05
 */
import { defineStore } from 'pinia'
import { DEFAULT_COLOR, MINE_COLOR } from '~/styles/themes/constants'

export const designSettings = defineStore('designSettings', {
  state: () => ({
    primaryColor: getItem(MINE_COLOR) || DEFAULT_COLOR,
  }),
  getters: {
    getPrimaryColor: state => state.primaryColor,
  },
  actions: {
    // 更新主题色，取local或者默认值
    updatePrimaryColor(color?: string) {
      setItem(MINE_COLOR, color || this.primaryColor)
      this.primaryColor = color || this.primaryColor
      // 更新样式表
      generateNewStyle(this.primaryColor)
    },
  },
})
