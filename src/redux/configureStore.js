import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import thunkMiddleware from 'redux-thunk'

import { visitingReducer } from './modules'

const reducers = combineReducers({
  visitingReducer
})

export default function configureStore() {
  return createStore(reducers,undefined,applyMiddleware(thunkMiddleware))
}