import { defineStore } from 'pinia'
import { login } from '~/apis/loginManagement'
import { getUserInfo } from '~/apis/userManagement'

export const userStore = defineStore('userStore', {
  state: () => ({
    token: '',
    name: '',
    welcome: '',
    avatar: '',
    buttons: [], // 按钮权限
    admintype: '', // 是否是超管
    roles: '',
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
    // 获取用户信息
    async getUserInfo() {
      const res = await getUserInfo()
      this.admintype = res.data.admintype
      this.roles = '1'
      this.buttons = res.data.buttons
      this.info = res.data.info
      this.name = res.data.name
      console.warn(res)
    },
    // 登出
    async logout() {
      this.token = ''
      this.buttons = []
      this.admintype = ''
      this.roles = ''
      vls.remove(ACCESS_TOKEN)
    },
  },
})
