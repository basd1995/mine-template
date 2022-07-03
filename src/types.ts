/*
 * @Author: basd1995
 * @Date: 2022-06-24 13:33:42
 * @LastEditors: basd1995
 * @LastEditTime: 2022-07-03 22:44:17
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

export interface routerItem {
  component: any
  hidden?: boolean
  id?: string
  meta: routerMeta
  name: string
  key?: string
  path: string
  pid?: string
  redirect?: string
  children?: routerItem[]
  hideChildrenInMenu?: boolean
}

export interface routerMeta {
  icon?: string
  link?: any
  show?: boolean
  target?: any
  title?: string
  hideHeader?: boolean
  hideChildren?: boolean
}
