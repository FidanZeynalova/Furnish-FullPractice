import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { furnishApi } from './Slices/furnishSlice'

export const store = configureStore({
    reducer: {
        [furnishApi.reducerPath]: furnishApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(furnishApi.middleware),
})

setupListeners(store.dispatch)