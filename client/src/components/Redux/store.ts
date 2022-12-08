import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { mailSlice} from './slices'
import { contrastSlice } from './contrastSlice'

const store = configureStore({
    reducer:{
      mailSlice: mailSlice.reducer,
      contrastSlice: contrastSlice.reducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store