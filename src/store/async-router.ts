import { defineStore } from 'pinia'

export const asyncRouter = defineStore('asyncRouter', {
  state: () => ({
    routers: [],
  }),
  getters: {
    getRouters: state => state.routers,
  },
  actions: {
    // 更新路由
    updateRouters(routers: any) {
      this.routers = routers
    },
  },
})
