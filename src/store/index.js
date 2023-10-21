import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import authReducer from './auth'

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer }
})

console.log(store.getState())

export default store
