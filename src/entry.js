import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddle from 'redux-promise'
import { Provider } from 'react-redux'
import immutable from 'immutable'

import reducers from './redux/reducers'
import state from './redux/state'
import Routers from './components/Routers.js'
import devTools from './components/Devtools'

const middleWares = compose(
  applyMiddleware(promiseMiddle),
  devTools.instrument()
);
const initialState = immutable.fromJS(state);
const store = createStore(reducers, initialState, middleWares);
ReactDom.render(
  <Provider store={store}>
    < Routers />
  </Provider>,
  document.getElementById('root')
);
