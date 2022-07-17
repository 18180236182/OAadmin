import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from '@/store/types'
import login from './login/login'

const store = createStore<IRootState>({
  state () {
    return {
      name: 'coderwhy',
      age: 18
    }
  },

  mutations: {},
  actions: {},
  modules: {
    login
  }
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function setupStore () {
  store.dispatch('login/loadLocalCache')
}

export function useStore (): Store<IStoreType> {
  return useVuexStore()
}

export default store
