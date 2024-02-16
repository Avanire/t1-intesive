import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '../../shared/api'
import { rootReducer } from './rootReducer'
import { setupListeners } from '@reduxjs/toolkit/query'

export function makeStore() {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(baseApi.middleware),
    })

    setupListeners(store.dispatch)

    return store
}

export const appStore = makeStore()

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
