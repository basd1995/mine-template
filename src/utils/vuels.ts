import Storage from 'vue-ls'
const options = {
  namespace: 'vsong_', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'local', // storage name session, local, memory
}

const { ls } = Storage.useStorage(options)

export const vls = ls
