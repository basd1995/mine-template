/*
 * @Author: basd1995
 * @Date: 2022-06-24 13:33:42
 * @LastEditors: basd1995
 * @LastEditTime: 2022-07-03 18:17:39
 */
export interface Theme {
  variableName: string
  color: string
}

export interface JsonObject {
  [propsName: string]: string
}

export interface Applocation {
  code: string
  name: string
  active: boolean
  menu?: []
}
