import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { State } from './root-types';

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        
    },
    mutations: {
        
    },
    actions: {
        
    }
})

// 定义自己的 `useStore` 组合式函数
export function useStore() {
    return baseUseStore(key)
}