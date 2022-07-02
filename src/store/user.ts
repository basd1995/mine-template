import { defineStore } from 'pinia'
import { login } from '~/apis/loginManagement'

export const userStore = defineStore('userStore', {
  state: () => ({
    token: '',
    name: '',
    welcome: '',
    avatar: '',
    buttons: [], // 按钮权限
    admintype: '', // 是否是超管
    roles: [],
    info: {},
  }),
  getters: {
    getToken: state => state.token,
    getName: state => state.name,
    getWelcome: state => state.welcome,
    getAvatar: state => state.avatar,
    getButtons: state => state.buttons,
    getAdmintype: state => state.admintype,
    getRoles: state => state.roles,
    getInfo: state => state.info,
  },
  actions: {
    // 登录
    async login(parameter: any) {
      const res = await login(parameter)
      vls.set(ACCESS_TOKEN, res.data, 7 * 24 * 60 * 60 * 1000)
      this.token = res.data
    },
  },
})
