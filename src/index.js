import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

const store = createStore(todoApp)
// when you want to have inital state
// const store = createStore(todoApp, window.STATE_FROM_SERVER)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)