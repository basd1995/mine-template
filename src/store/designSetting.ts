/*
 * @Author: basd1995
 * @Date: 2022-06-26 15:45:07
 * @LastEditors: basd1995
 * @LastEditTime: 2022-06-28 17:27:04
 */
import { defineStore } from 'pinia'
import { DEFAULT_COLOR, MINE_COLOR } from '~/styles/themes/constants'

export const designSettings = defineStore('designSettings', {
  state: () => ({
    primaryColor: getItem(MINE_COLOR) || DEFAULT_COLOR,
    isCollapse: getItem(IS_COLLAPSE) === '0' || DEFAULT_COLLAPSE,
  }),
  getters: {
    getPrimaryColor: state => state.primaryColor,
    getIsCollapse: state => state.isCollapse,
  },
  actions: {
    // 更新主题色，取local或者默认值
    updatePrimaryColor(color?: string) {
      setItem(MINE_COLOR, color || this.primaryColor)
      this.primaryColor = color || this.primaryColor
      // 更新样式表
      generateNewStyle(this.primaryColor)
    },
    updateIsCollapse(flag: boolean) {
      setItem(IS_COLLAPSE, flag ? '0' : '1')
      this.isCollapse = flag
    },
  },
})
