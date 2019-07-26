import { createStore as reduxCreateStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"

import reducers from "./reducers"

const createStore = () =>
  reduxCreateStore(reducers, applyMiddleware(thunkMiddleware))

export default createStore
