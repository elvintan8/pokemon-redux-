import thunkMiddleware from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

import { configureStore as setStore } from '@reduxjs/toolkit'

export default function configureStore(initialState = {}) {
  const middlewares = [thunkMiddleware, apiMiddleware]

  if (process.env.NODE_ENV === 'development') {
    const loggerMiddleware = createLogger()
    middlewares.push(loggerMiddleware)
  }

  return setStore({
    reducer: rootReducer,
    middleware: middlewares
  })
}
